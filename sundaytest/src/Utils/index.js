export function isNull(data) {
    try {
          if (data != null && data != 'null' && data != undefined && data.toString().length != undefined &&
                data.toString().length != null && data.toString().length > 0) {
                return true;
          } else {
                return false;
          }
    } catch (error) {
          console.log(error)
          return false;
    }

}