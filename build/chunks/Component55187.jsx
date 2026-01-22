/** Chunk was on 89479 **/
/** chunk id: 55187, original params: a,e,t (module,exports,require) **/
require.d(exports, {
  b: () => C
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk13202 = require("./13202.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk370480 = require("./370480.js"),
  Chunk738104 = require("./738104.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk626584 = require("./626584.js"),
  Chunk185311 = require("./185311.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk689588 = require("./689588.js");
let j = new Chunk626584.A("TwoWayLink");

function C(a) {
  let {
    platformType: e,
    isWaitingForConnection: t,
    onWaitingForConnection: s,
    expectedCallbackState: u,
    onAuthToken: C,
    onError: g,
    onClose: v,
    img: b,
    title: E,
    body: f,
    redirectDestination: k
  } = a, A = r.useCallback(async () => {
    let a;
    try {
      if (a = await (0, x.d)(e, {
          twoWayLinkType: l.I.DESKTOP
        }), null == a) throw Error("missing authorizeURL")
    } catch (a) {
      j.error("Error opening provider authorize page", a), g();
      return
    }
    let {
      state: t
    } = (0, d.vA)(a);
    i()(null != t, "Authorize URL state query parameter must be present"), null == s || s(t)
  }, [e, g, s]), T = r.useCallback(a => {
    let {
      callbackCode: t,
      callbackState: n
    } = a;
    n !== u ? j.warn("".concat(e, " link: received mismatching callback state!")) : C({
      callbackCode: t,
      callbackState: n
    })
  }, [e, u, C]);
  return r.useEffect(() => (o.h.subscribe("USER_CONNECTIONS_LINK_CALLBACK", T), () => {
    o.h.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", T)
  }), [T]), (0, n.jsxs)(N.A, {
    children: [(0, n.jsxs)(c.rQ0, {
      "data-migration-pending": true,
      direction: m.A.Direction.VERTICAL,
      className: p.wx,
      separator: false,
      children: [(0, n.jsx)(c.Text, {
        className: p.u1,
        variant: "text-xs/bold",
        color: "text-default",
        children: h.intl.format(h.t.fHz6eR, {
          number: 1,
          total: 2
        })
      }), (0, n.jsxs)("div", {
        className: p.bm,
        children: [b, " "]
      }), (0, n.jsx)(c.Heading, {
        className: p.DD,
        variant: "heading-xl/extrabold",
        children: E
      }), null != v && (0, n.jsx)(c.s_y, {
        className: p.b,
        onClick: v
      })]
    }), (0, n.jsxs)(c.$mQ, {
      "data-migration-pending": true,
      className: p.rf,
      paddingFix: false,
      children: [(0, n.jsx)(c.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "text-default",
        children: f
      }), !t && null != k && (0, n.jsx)(c.Text, {
        tag: "p",
        variant: "text-sm/normal",
        color: "text-default",
        children: h.intl.format(h.t.XhlYYn, {
          redirectUrl: k
        })
      })]
    }), (0, n.jsx)(c.jlY, {
      "data-migration-pending": true,
      className: p.qr,
      children: (0, n.jsx)(c.Button, {
        variant: t ? "secondary" : "primary",
        text: h.intl.format(t ? h.t["8Laby+"] : h.t["6623tt"], {
          popoutWindowIcon: {},
          popoutWindowIconHook: () => (0, n.jsx)(c.tfB, {
            color: "currentColor",
            className: p.LE,
            size: "xs"
          })
        }),
        onClick: A,
        fullWidth: true
      })
    })]
  })
}