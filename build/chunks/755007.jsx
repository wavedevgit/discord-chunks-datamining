/** Chunk was on 45620 **/
/** chunk id: 755007, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk960919 = require("./960919.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk595392 = require("./595392.js");

function u(e) {
  let {
    orbAmount: t,
    className: n
  } = e;
  return <i.Text variant={"text-md/semibold"} className={a()(c.orbPriceTag, n)}>{<i.nn4>{s.intl.format(s.t["a/Y8PD"], {
        orbAmount: t
      })}</i.nn4>}{<o.Z shouldUseThemeColor={true} />}{<span aria-hidden={true}>{t}</span>}</i.Text>
}