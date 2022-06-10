import del from "del"

// Config
import path from "../config/path"

// Clear processing
export default () => {
  return del(path.root)
}