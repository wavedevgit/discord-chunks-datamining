/** Chunk was on 46455 **/
/** chunk id: 924339, original params: e,r,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => A
}), require("./415506.js"), require("./35282.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk593473 = require("./593473.js"),
  Chunk186231 = require("./186231.js"),
  Chunk159277 = require("./159277.js"),
  Chunk478677 = require("./478677.js"),
  Chunk457330 = require("./457330.js"),
  Chunk702493 = require("./702493.js"),
  Chunk77987 = require("./77987.jsx"),
  Chunk275759 = require("./275759.js"),
  Chunk710845 = require("./710845.js"),
  Chunk807675 = require("./807675.js"),
  Chunk69580 = require("./69580.jsx"),
  Chunk787025 = require("./787025.jsx"),
  Chunk591759 = require("./591759.js"),
  Chunk981631 = require("./981631.js"),
  Chunk602091 = require("./602091.js");
let g = new Chunk710845.Z("LinkAuthorize");
async function j(e, r, t, n) {
  var o, l, c, i, p;
  let d = null;
  try {
    let {
      body: e
    } = await s.Z.authorize(n, {
      twoWayLinkType: u.g.WEB
    });
    d = e.url
  } catch (e) {
    throw Error("error at authorize with code ".concat(null != (l = null == e || null == (o = e.body) ? true : o.code) ? l : 0))
  }
  let f = null;
  try {
    a()(null != d, "No URL in authorize response");
    let {
      state: e
    } = (0, b.xp)(d);
    a()(null != e, "Authorize URL state query parameter must be present"), f = e
  } catch (e) {
    throw Error("error at authorize parsing callback params")
  }
  try {
    let o = await s.Z.completeTwoWayLink(n, e, r, f, t);
    return null == o || null == (c = o.body) ? true : c.redirect
  } catch (e) {
    throw Error("error at callback with code ".concat(null != (p = null == e || null == (i = e.body) ? true : i.code) ? p : 0))
  }
}

function m(e) {
  var r, t;
  let {
    platformType: o
  } = e;
  (0, p.Z)();
  let a = (0, y.y)(window.location.search),
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
        n = await j(r, i, u, o)
      } catch (t) {
        var a;
        g.error("Error Creating Discord link", null == t ? true : t.message);
        let e = w.Z.toURLSafe(r);
        if (null == e) return;
        e.searchParams.delete("code"), e.searchParams.set("error", "two_way_link_error"), e.searchParams.set("error_description", null != (a = null == t ? true : t.message) ? a : "unknown_error"), r = e.toString()
      }
      window.location = null == n || n === c.b.OAUTH_REDIRECT ? r : n
    };
  return (0, n.jsx)(h.G, {
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
      transitionState: P.Dv.ENTERED
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
let A = (0, Chunk77987.e)(function(e) {
  let {
    match: r
  } = e, t = r.params.type, {
    client_id: o = ""
  } = l.parse(window.location.search), a = t === v.ABu.PLAYSTATION && o === i.t.PLAYSTATION_APPLICATION_ID, c = t === v.ABu.PLAYSTATION_STAGING && o === i.t.PLAYSTATION_STAGING_APPLICATION_ID;
  return a || c ? (0, n.jsx)(m, {
    platformType: t
  }) : null
})