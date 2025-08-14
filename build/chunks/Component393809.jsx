/** Chunk was on 31835 **/
/** chunk id: 393809, original params: t,r,n (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk53365 = require("./53365.js"),
  Chunk377176 = require("./377176.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk690558 = require("./690558.js");

function T(t) {
  let {
    guildId: r,
    transitionState: n,
    onClose: T
  } = t, [_, A] = i.useState(false), [N, d] = i.useState(false), u = async () => {
    A(true);
    try {
      await (0, c.zo)(r), T()
    } finally {
      A(false)
    }
  }, I = l.intl.string(l.t["22itmp"]);
  return (0, e.jsxs)(o.Y0X, {
    className: E.__invalid_container,
    size: o.CgR.DYNAMIC,
    transitionState: n,
    "aria-label": I,
    parentComponent: "TermsNotAcceptedErrorModal",
    children: [(0, e.jsxs)(o.hzk, {
      className: E.content,
      children: [(0, e.jsxs)("div", {
        className: E.header,
        children: [(0, e.jsx)(o.Mgn, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20,
          className: E.warningIcon
        }), (0, e.jsx)(o.LZC, {
          size: 8,
          horizontal: true
        }), (0, e.jsx)(o.X6q, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: I
        })]
      }), (0, e.jsx)(o.LZC, {
        size: 12
      }), (0, e.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        className: E.__invalid_body,
        children: l.intl.string(l.t.kdbm9P)
      }), (0, e.jsx)(o.LZC, {
        size: 28
      }), (0, e.jsx)(o.XZJ, {
        onChange: () => {
          d(t => !t)
        },
        size: 20,
        type: o.XZJ.Types.INVERTED,
        value: N,
        children: (0, e.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: (0, s.f)()
        })
      })]
    }), (0, e.jsxs)(o.mzw, {
      children: [(0, e.jsx)(o.zxk, {
        variant: "primary",
        text: l.intl.string(l.t["cY+Ooa"]),
        disabled: !N,
        onClick: u,
        loading: _
      }), (0, e.jsx)(o.LZC, {
        size: 12,
        horizontal: true
      }), (0, e.jsx)(a.zx, {
        color: a.zx.Colors.PRIMARY,
        look: a.zx.Looks.OUTLINED,
        onClick: T,
        children: l.intl.string(l.t["ETE/oK"])
      })]
    })]
  })
}