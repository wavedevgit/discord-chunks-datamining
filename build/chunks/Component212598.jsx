/** Chunk was on 51343 **/
/** chunk id: 212598, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  t: () => v
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk771831 = require("./771831.js");
let p = new Chunk710845.Z("TwoWayLink");

function v(e) {
  let {
    platformType: a,
    isWaitingForConnection: t,
    onWaitingForConnection: s,
    expectedCallbackState: m,
    onAuthToken: v,
    onError: f,
    onClose: k,
    img: b,
    title: g,
    body: E,
    redirectDestination: T
  } = e, O = n.useCallback(async () => {
    let e;
    try {
      if (e = await (0, u.H)(a, {
          twoWayLinkType: i.g.DESKTOP
        }), null == e) throw Error("missing authorizeURL")
    } catch (e) {
      p.error("Error opening provider authorize page", e), f();
      return
    }
    let {
      state: t
    } = (0, x.xp)(e);
    l()(null != t, "Authorize URL state query parameter must be present"), null == s || s(t)
  }, [a, f, s]), y = n.useCallback(e => {
    let {
      callbackCode: t,
      callbackState: r
    } = e;
    if (r !== m) return void p.warn("".concat(a, " link: received mismatching callback state!"));
    v({
      callbackCode: t,
      callbackState: r
    })
  }, [a, m, v]);
  return n.useEffect(() => (d.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", y), () => {
    d.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", y)
  }), [y]), (0, r.jsxs)(N.Z, {
    children: [(0, r.jsxs)(c.xBx, {
      direction: h.Z.Direction.VERTICAL,
      className: j.header,
      separator: false,
      children: [(0, r.jsx)(c.Text, {
        className: j.stepHeader,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: C.intl.format(C.t.fHz6eX, {
          number: 1,
          total: 2
        })
      }), (0, r.jsxs)("div", {
        className: j.illustration,
        children: [b, " "]
      }), (0, r.jsx)(c.Heading, {
        className: j.title,
        variant: "heading-xl/extrabold",
        children: g
      }), null != k && (0, r.jsx)(c.olH, {
        className: j.closeButton,
        onClick: k
      })]
    }), (0, r.jsxs)(c.hzk, {
      className: j.body,
      paddingFix: false,
      children: [(0, r.jsx)(c.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "header-secondary",
        children: E
      }), !t && null != T && (0, r.jsx)(c.Text, {
        tag: "p",
        variant: "text-sm/normal",
        color: "header-secondary",
        children: C.intl.format(C.t.XhlYYm, {
          redirectUrl: T
        })
      })]
    }), (0, r.jsx)(c.mzw, {
      className: j.footer,
      children: (0, r.jsxs)(o.zx, {
        className: j.footerButton,
        color: t ? o.zx.Colors.PRIMARY : o.zx.Colors.BRAND,
        onClick: O,
        children: [t ? C.intl.string(C.t["5911LS"]) : C.intl.string(C.t["3PatS0"]), (0, r.jsx)(c.rgF, {
          color: "currentColor",
          className: j.launchIcon,
          size: "xs"
        })]
      })
    })]
  })
}