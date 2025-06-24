/** Chunk was on 19456 **/
"use strict";

function n(...t) {
  return (...e) => {
    for (let r of t) "function" == typeof r && r(...e)
  }
}
r.d(e, {
  t: () => n
})