/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";

function n(t, e, r) {
  if (e.set) e.set.call(t, r);
  else {
    if (!e.writable) throw TypeError("attempted to set read only private field");
    e.value = r
  }
}
r.d(e, {
  y: () => n
})