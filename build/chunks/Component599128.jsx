/** Chunk was on 65893 **/
/** chunk id: 599128, original params: e,r,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => m
}), require("./65821.js"), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk492462 = require("./492462.js"),
  Chunk674432 = require("./674432.js"),
  Chunk333748 = require("./333748.js"),
  Chunk13202 = require("./13202.js"),
  Chunk77468 = require("./77468.js"),
  Chunk269815 = require("./269815.js"),
  Chunk114716 = require("./114716.jsx"),
  Chunk370480 = require("./370480.js"),
  Chunk626584 = require("./626584.js"),
  Chunk123677 = require("./123677.js"),
  Chunk200330 = require("./200330.jsx"),
  Chunk321987 = require("./321987.jsx"),
  Chunk998218 = require("./998218.js"),
  Chunk652215 = require("./652215.js"),
  Chunk231723 = require("./231723.js");
let P = new Chunk626584.A("LinkAuthorize");
async function g(e, r, t, n) {
  var o, l, c, i, p;
  let d = null;
  try {
    let {
      body: e
    } = await s.A.authorize(n, {
      twoWayLinkType: u.I.WEB
    });
    d = e.url
  } catch (e) {
    throw Error("error at authorize with code ".concat(null != (o = null == e || null == (l = e.body) ? true : l.code) ? o : 0))
  }
  let y = null;
  try {
    a()(null != d, "No URL in authorize response");
    let {
      state: e
    } = (0, b.vA)(d);
    a()(null != e, "Authorize URL state query parameter must be present"), y = e
  } catch (e) {
    throw Error("error at authorize parsing callback params")
  }
  try {
    let o = await s.A.completeTwoWayLink(n, e, r, y, t);
    return null == o || null == (c = o.body) ? true : c.redirect
  } catch (e) {
    throw Error("error at callback with code ".concat(null != (i = null == e || null == (p = e.body) ? true : p.code) ? i : 0))
  }
}

function j(e) {
  var r, t;
  let {
    platformType: o
  } = e;
  (0, p.A)();
  let a = (0, f._)(window.location.search),
    {
      code: i,
      token_redirect_uri: u
    } = l.parse(window.location.search),
    s = async e => {
      let {
        location: r
      } = e;
      if (null == r) return;
      let {
        error: t
      } = l.parse(r), n = null;
      if (null == t && null != i) try {
        n = await g(r, i, u, o)
      } catch (t) {
        var a;
        P.error("Error Creating Discord link", null == t ? true : t.message);
        let e = w.A.toURLSafe(r);
        if (null == e) return;
        e.searchParams.delete("code"), e.searchParams.set("error", "two_way_link_error"), e.searchParams.set("error_description", null != (a = null == t ? true : t.message) ? a : "unknown_error"), r = e.toString()
      }
      window.location = null == n || n === c.U.OAUTH_REDIRECT ? r : n
    };
  return (0, n.jsx)(h.$, {
    removeChildWrapper: true,
    children: (0, n.jsx)(O.OAuth2AuthorizeModal, (r = function(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
          n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), n.forEach(function(r) {
          var n;
          n = t[r], r in e ? Object.defineProperty(e, r, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[r] = n
        })
      }
      return e
    }({
      transitionState: A.ip.ENTERED
    }, a), t = t = {
      showLogout: true,
      callback: s
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : (function(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t.push.apply(t, n)
      }
      return t
    })(Object(t)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
    }), r))
  })
}
let m = (0, Chunk114716.C)(function(e) {
  let {
    match: r
  } = e, t = r.params.type, {
    client_id: o = ""
  } = l.parse(window.location.search), a = t === v.fg2.PLAYSTATION && o === i.i.PLAYSTATION_APPLICATION_ID, c = t === v.fg2.PLAYSTATION_STAGING && o === i.i.PLAYSTATION_STAGING_APPLICATION_ID;
  return a || c ? (0, n.jsx)(j, {
    platformType: t
  }) : null
})