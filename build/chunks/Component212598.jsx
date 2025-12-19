/** Chunk was on 51343 **/
/** chunk id: 212598, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  t: () => C
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk478677 = require("./478677.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk275759 = require("./275759.js"),
  Chunk202120 = require("./202120.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk424071 = require("./424071.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk926375 = require("./926375.js");
let g = new Chunk710845.Z("TwoWayLink");

function C(e) {
  let {
    platformType: t,
    isWaitingForConnection: a,
    onWaitingForConnection: r,
    expectedCallbackState: m,
    onAuthToken: C,
    onError: j,
    onClose: v,
    img: f,
    title: k,
    body: b,
    redirectDestination: E
  } = e, T = i.useCallback(async () => {
    let e;
    try {
      if (e = await (0, u.H)(t, {
          twoWayLinkType: s.g.DESKTOP
        }), null == e) throw Error("missing authorizeURL")
    } catch (e) {
      g.error("Error opening provider authorize page", e), j();
      return
    }
    let {
      state: a
    } = (0, d.xp)(e);
    l()(null != a, "Authorize URL state query parameter must be present"), null == r || r(a)
  }, [t, j, r]), O = i.useCallback(e => {
    let {
      callbackCode: a,
      callbackState: n
    } = e;
    if (n !== m) return void g.warn("".concat(t, " link: received mismatching callback state!"));
    C({
      callbackCode: a,
      callbackState: n
    })
  }, [t, m, C]);
  return i.useEffect(() => (c.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", O), () => {
    c.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", O)
  }), [O]), (0, n.jsxs)(h.Z, {
    children: [(0, n.jsxs)(o.xBx, {
      "data-migration-pending": true,
      direction: x.Z.Direction.VERTICAL,
      className: N.header,
      separator: false,
      children: [(0, n.jsx)(o.Text, {
        className: N.stepHeader,
        variant: "text-xs/bold",
        color: "text-default",
        children: p.intl.format(p.t.fHz6eR, {
          number: 1,
          total: 2
        })
      }), (0, n.jsxs)("div", {
        className: N.illustration,
        children: [f, " "]
      }), (0, n.jsx)(o.Heading, {
        className: N.title,
        variant: "heading-xl/extrabold",
        children: k
      }), null != v && (0, n.jsx)(o.olH, {
        className: N.closeButton,
        onClick: v
      })]
    }), (0, n.jsxs)(o.hzk, {
      "data-migration-pending": true,
      className: N.body,
      paddingFix: false,
      children: [(0, n.jsx)(o.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "text-default",
        children: b
      }), !a && null != E && (0, n.jsx)(o.Text, {
        tag: "p",
        variant: "text-sm/normal",
        color: "text-default",
        children: p.intl.format(p.t.XhlYYn, {
          redirectUrl: E
        })
      })]
    }), (0, n.jsx)(o.mzw, {
      "data-migration-pending": true,
      className: N.footer,
      children: (0, n.jsx)(o.Button, {
        variant: a ? "secondary" : "primary",
        text: p.intl.format(a ? p.t["8Laby+"] : p.t["6623tt"], {
          popoutWindowIcon: {},
          popoutWindowIconHook: () => (0, n.jsx)(o.rgF, {
            color: "currentColor",
            className: N.launchIcon,
            size: "xs"
          })
        }),
        onClick: T,
        fullWidth: true
      })
    })]
  })
}