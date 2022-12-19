import swal from "sweetalert"
export const useFlash = () => {
  const Flash = (title = "Flash", message, level = "success") => {
    return swal(title, message, level)
  }
  return { Flash }
}
