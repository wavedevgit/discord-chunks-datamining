/** Chunk was on 86029 **/
"use strict";

function n(...t) {
  return (...e) => {
    for (let r of t) "function" == typeof r && r(...e)
  }
}
r.d(e, {
  t: () => n
})