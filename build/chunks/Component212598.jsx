/** Chunk was on 51343 **/
/** chunk id: 212598, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  t: () => v
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
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
    platformType: t,
    isWaitingForConnection: a,
    onWaitingForConnection: s,
    expectedCallbackState: h,
    onAuthToken: v,
    onError: f,
    onClose: b,
    img: k,
    title: g,
    body: E,
    redirectDestination: T
  } = e, O = n.useCallback(async () => {
    let e;
    try {
      if (e = await (0, x.H)(t, {
          twoWayLinkType: i.g.DESKTOP
        }), null == e) throw Error("missing authorizeURL")
    } catch (e) {
      p.error("Error opening provider authorize page", e), f();
      return
    }
    let {
      state: a
    } = (0, u.xp)(e);
    r()(null != a, "Authorize URL state query parameter must be present"), null == s || s(a)
  }, [t, f, s]), R = n.useCallback(e => {
    let {
      callbackCode: a,
      callbackState: l
    } = e;
    if (l !== h) return void p.warn("".concat(t, " link: received mismatching callback state!"));
    v({
      callbackCode: a,
      callbackState: l
    })
  }, [t, h, v]);
  return n.useEffect(() => (d.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", R), () => {
    d.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", R)
  }), [R]), (0, l.jsxs)(N.Z, {
    children: [(0, l.jsxs)(c.xBx, {
      direction: m.Z.Direction.VERTICAL,
      className: j.header,
      separator: false,
      children: [(0, l.jsx)(c.Text, {
        className: j.stepHeader,
        variant: "text-xs/bold",
        color: "text-default",
        children: C.intl.format(C.t.fHz6eR, {
          number: 1,
          total: 2
        })
      }), (0, l.jsxs)("div", {
        className: j.illustration,
        children: [k, " "]
      }), (0, l.jsx)(c.Heading, {
        className: j.title,
        variant: "heading-xl/extrabold",
        children: g
      }), null != b && (0, l.jsx)(c.olH, {
        className: j.closeButton,
        onClick: b
      })]
    }), (0, l.jsxs)(c.hzk, {
      className: j.body,
      paddingFix: false,
      children: [(0, l.jsx)(c.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "text-default",
        children: E
      }), !a && null != T && (0, l.jsx)(c.Text, {
        tag: "p",
        variant: "text-sm/normal",
        color: "text-default",
        children: C.intl.format(C.t.XhlYYn, {
          redirectUrl: T
        })
      })]
    }), (0, l.jsx)(c.mzw, {
      className: j.footer,
      children: (0, l.jsxs)(o.zx, {
        className: j.footerButton,
        color: a ? o.zx.Colors.PRIMARY : o.zx.Colors.BRAND,
        onClick: O,
        children: [a ? C.intl.string(C.t["5911Lb"]) : C.intl.string(C.t["3PatSz"]), (0, l.jsx)(c.rgF, {
          color: "currentColor",
          className: j.launchIcon,
          size: "xs"
        })]
      })
    })]
  })
}