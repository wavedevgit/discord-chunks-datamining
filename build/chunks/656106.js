/** Chunk was on 28636 **/
/** chunk id: 656106, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Fr: () => u,
  JX: () => d,
  YR: () => o,
  eM: () => s,
  kq: () => c
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk976860 = require("./976860.js"),
  Chunk767599 = require("./767599.js"),
  Chunk310419 = require("./310419.js"),
  Chunk652215 = require("./652215.js");
let s = () => {
    let e = {
      previousView: (0, r.R4)()
    };
    (0, l.pX)(i.BVt.GLOBAL_DISCOVERY_APPS, {
      state: e
    })
  },
  c = e => {
    let {
      categoryId: t
    } = e, n = {
      previousView: (0, r.R4)()
    };
    (0, l.pX)(i.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t), {
      state: n
    })
  },
  o = e => {
    let {
      applicationId: t
    } = e, n = {
      previousView: (0, r.R4)()
    };
    (0, l.pX)(i.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t), {
      state: n
    })
  },
  d = function() {
    let {
      query: e,
      categoryId: t,
      page: n
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, s = {
      previousView: (0, r.R4)()
    }, c = new URLSearchParams;
    null != e && "" !== e && c.set("q", e), null != t && t !== a.lj && c.set("category_id", t.toString()), null != n && n > 1 && c.set("page", n.toString()), (0, l.pX)(i.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, {
      state: s,
      search: c.toString()
    })
  },
  u = e => {
    let {
      location: {
        state: t
      }
    } = (0, l.JK)();
    (0, l.bG)(e, t)
  }