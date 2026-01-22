/** Chunk was on 86142 **/
/** chunk id: 994125, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  K: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk429707 = require("./429707.js"),
  Chunk274303 = require("./274303.js");

function o() {
  let e = (0, i.cf)([a.A], () => ({
    isLoading: a.A.getIsValidatingUsers(),
    multiAccountUsers: a.A.getUsers()
  }));
  return r.useEffect(() => {
    s.h.wait(() => {
      l.F6()
    })
  }, []), e
}