/** Chunk was on 74327 **/
/** chunk id: 890811, original params: e,i,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk207913 = require("./207913.js"),
  Chunk393033 = require("./393033.js"),
  Chunk985481 = require("./985481.js"),
  Chunk239093 = require("./239093.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk249942 = require("./249942.js"),
  Chunk299916 = require("./299916.js");

function h(e) {
  let {
    className: i,
    isDsaEligible: n = false,
    onClose: s,
    onNext: h,
    onBack: j
  } = e, _ = (0, g.y5)(), C = (0, r.bG)([x.A], () => x.A.getFreeTextAppealReason()), [E, I] = a.useState(""), [v, S] = a.useState(false);
  a.useEffect(() => {
    I(null != C ? C : ""), S(_ === p.Iv.SOMETHING_ELSE)
  }, [C, _, n]);
  let T = p.Qv.map(e => ({
    value: e,
    name: (0, m.l0)(e)
  }));
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(d.rQ0, {
      "data-migration-pending": true,
      direction: o.A.Direction.VERTICAL,
      className: A.wx,
      separator: false,
      children: [(0, t.jsx)(d.Heading, {
        className: A.DD,
        variant: "heading-xl/semibold",
        children: N.intl.string(N.t["C5q+pW"])
      }), (0, t.jsx)(d.Text, {
        className: A.VA,
        color: "text-default",
        variant: "text-md/normal",
        children: N.intl.string(N.t.VEcRhw)
      }), null != s && (0, t.jsx)(d.s_y, {
        "data-migration-pending": true,
        className: A.b,
        onClick: s
      })]
    }), (0, t.jsxs)(d.$mQ, {
      "data-migration-pending": true,
      className: l()(u.j, i),
      paddingFix: false,
      children: [(0, t.jsx)(d.z6M, {
        value: _,
        options: T,
        onChange: e => {
          S(e === p.Iv.SOMETHING_ELSE), e !== p.Iv.SOMETHING_ELSE && (I(""), c.h.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
            userInput: ""
          })), c.h.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT",
            signal: e
          })
        }
      }), n && v && (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(d.fs1, {
          rows: 4,
          maxLength: 1024,
          placeholder: N.intl.string(N.t.bQrZIN),
          value: E,
          onChange: I,
          autoFocus: true
        }), (0, t.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: N.intl.string(N.t.xfNY3L)
        })]
      }), (0, t.jsx)(d.Text, {
        variant: "text-sm/normal",
        className: u.e,
        children: N.intl.format(N.t["8k9GCW"], {})
      })]
    }), (0, t.jsx)(d.jlY, {
      "data-migration-pending": true,
      children: (0, t.jsxs)(d.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [(0, t.jsx)(d.Button, {
          variant: "primary",
          text: N.intl.string(N.t.PDTjLN),
          onClick: () => {
            c.h.dispatch({
              type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
              userInput: E
            }), null == h || h()
          }
        }), (0, t.jsx)(d.Button, {
          variant: "secondary",
          text: N.intl.string(N.t["13/7kX"]),
          onClick: () => {
            c.h.dispatch({
              type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
              userInput: E
            }), null == j || j()
          }
        })]
      })
    })]
  })
}