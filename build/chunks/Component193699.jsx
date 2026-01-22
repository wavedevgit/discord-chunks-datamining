/** Chunk was on 21738 **/
/** chunk id: 193699, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk290595 = require("./290595.js"),
  Chunk755395 = require("./755395.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk786983 = require("./786983.js");

function A(e) {
  let {
    className: t,
    markAsDismissed: n
  } = e;
  return (0, r.jsxs)(o.A, {
    className: l()(h.Nr, t),
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-md/semibold",
      className: h.wx,
      children: f.intl.string(f.t.HcbnMM)
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      children: f.intl.format(f.t.NkFrzN, {
        onPrivacyClick: () => {
          (0, u.openUserSettings)(c.X.DATA_AND_PRIVACY_PANEL, {
            section: d.nc_.DATA_AND_PRIVACY
          })
        }
      })
    }), (0, r.jsxs)("div", {
      className: h.UD,
      children: [(0, r.jsx)(a.Button, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: f.intl.string(f.t.ebojgD),
        onClick: () => (0, s.U)([d.YAq.PERSONALIZATION], [])
      }), (0, r.jsx)(a.Button, {
        variant: "secondary",
        size: "sm",
        fullWidth: true,
        text: f.intl.string(f.t.f3Pet9),
        onClick: () => n(p.i.DISMISS)
      })]
    })]
  })
}