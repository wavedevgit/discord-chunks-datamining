/** Chunk was on 51343 **/
/** chunk id: 212598, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  t: () => j
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk478677 = require("./478677.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk275759 = require("./275759.js"),
  Chunk202120 = require("./202120.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk424071 = require("./424071.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk926375 = require("./926375.js");
let C = new Chunk710845.Z("TwoWayLink");

function j(e) {
  let {
    platformType: t,
    isWaitingForConnection: a,
    onWaitingForConnection: i,
    expectedCallbackState: h,
    onAuthToken: j,
    onError: v,
    onClose: f,
    img: b,
    title: k,
    body: E,
    redirectDestination: T
  } = e, O = r.useCallback(async () => {
    let e;
    try {
      if (e = await (0, x.H)(t, {
          twoWayLinkType: s.g.DESKTOP
        }), null == e) throw Error("missing authorizeURL")
    } catch (e) {
      C.error("Error opening provider authorize page", e), v();
      return
    }
    let {
      state: a
    } = (0, u.xp)(e);
    l()(null != a, "Authorize URL state query parameter must be present"), null == i || i(a)
  }, [t, v, i]), R = r.useCallback(e => {
    let {
      callbackCode: a,
      callbackState: n
    } = e;
    if (n !== h) return void C.warn("".concat(t, " link: received mismatching callback state!"));
    j({
      callbackCode: a,
      callbackState: n
    })
  }, [t, h, j]);
  return r.useEffect(() => (d.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", R), () => {
    d.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", R)
  }), [R]), (0, n.jsxs)(N.Z, {
    children: [(0, n.jsxs)(c.xBx, {
      "data-migration-pending": true,
      direction: m.Z.Direction.VERTICAL,
      className: g.header,
      separator: false,
      children: [(0, n.jsx)(c.Text, {
        className: g.stepHeader,
        variant: "text-xs/bold",
        color: "text-default",
        children: p.intl.format(p.t.fHz6eR, {
          number: 1,
          total: 2
        })
      }), (0, n.jsxs)("div", {
        className: g.illustration,
        children: [b, " "]
      }), (0, n.jsx)(c.Heading, {
        className: g.title,
        variant: "heading-xl/extrabold",
        children: k
      }), null != f && (0, n.jsx)(c.olH, {
        className: g.closeButton,
        onClick: f
      })]
    }), (0, n.jsxs)(c.hzk, {
      "data-migration-pending": true,
      className: g.body,
      paddingFix: false,
      children: [(0, n.jsx)(c.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "text-default",
        children: E
      }), !a && null != T && (0, n.jsx)(c.Text, {
        tag: "p",
        variant: "text-sm/normal",
        color: "text-default",
        children: p.intl.format(p.t.XhlYYn, {
          redirectUrl: T
        })
      })]
    }), (0, n.jsx)(c.mzw, {
      "data-migration-pending": true,
      className: g.footer,
      children: (0, n.jsxs)(o.zx, {
        className: g.footerButton,
        color: a ? o.zx.Colors.PRIMARY : o.zx.Colors.BRAND,
        onClick: O,
        children: [a ? p.intl.string(p.t["5911Lb"]) : p.intl.string(p.t["3PatSz"]), (0, n.jsx)(c.rgF, {
          color: "currentColor",
          className: g.launchIcon,
          size: "xs"
        })]
      })
    })]
  })
}