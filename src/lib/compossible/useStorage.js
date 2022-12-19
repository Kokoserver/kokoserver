import { ref, watch } from "vue"
import SecureLS from "secure-ls"



export const useStorage = (
  key,
  Val,
  config = { serialize: (Boolean = false), secure: (Boolean = true) }
) => {
  /***
   @param {String} key: The key to use for storing the value in the storage
   @param {Object, Number, String, Array} Val: The default value to be stored the value in the storage, but will be overridden by the  new update
   @param {Object} config: Whether to serialize, secure the value to the storage object instead 
   */
  // create local storage instance
  const lg = new SecureLS(
    config.secure
      ? { encodingType: "rc4", isCompression: true }
      : { encodingType: "", isCompression: false }
  )

  // get store value
  let storeValue = read()
  // Read stored values from storage
  function read() {
    // get the value for key from storage
    let storeData = lg.get(key)

    // check if serializable is true, if true serializable  the stored value and return it, self return the the store value
    storeData = config.serialize
      ? storeData
        ? unSerializeData(storeData)
        : ""
      : storeData
    return storeData
  }
  // check if  default data was provided

  if (storeValue) {
    // if value already exists in the store return it as a reactive data object
    Val = ref(storeValue)
  } else {
    // else make the default data object reactive
    Val = ref(Val)
    // save it the storage as the stored value
    write()
  }

  // data serialization for the store
  function serializeData(data) {
    // check serialization option is true
    if (config.serialize) {
      //check if the data is serializable
      if (data instanceof Object || typeof data === Array.isArray(data)) {
        // serialize the data if is serializable and return the object
        return JSON.stringify(data)
      } else {
        // throw an error if the data is not serializable
        throw new Error(
          `Please provide a serializable value for  ${key} with a value of ${storeValue}`
        )
      }
    }
  }

  // data parser for the store
  function unSerializeData(data) {
    // check if the data is serializable
    if (config.serialize) {
      try {
        // parse the data and return it
        return JSON.parse(data)
      } catch (error) {
        // throw an error if the data is not parsable
        throw new Error(
          `${key} with a value ${data} is not a serializable object`
        )
      }
    }
  }
  // write data to the store
  function write() {
    // check if the data is not empty
    if (Val.value === null) {
      // remove the key from the store if the value is empty
      lg.remove(key)
    } else {
      // check if the value is serializable before writing
      config.serialize
        ? lg.set(key, serializeData(Val.value))
        : lg.set(key, Val.value ? Val.value : null)
    }
  }
  //  storage update function, it watch for value changes and update
  watch(Val, write, { deep: true })
  //  return storage object as a reactive data
  return Val
}
