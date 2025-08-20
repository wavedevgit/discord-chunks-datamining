/** Chunk was on 65819 **/
/** chunk id: 903759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk327802 = require("./327802.jsx"),
  Chunk372129 = require("./372129.jsx"),
  Chunk598117 = require("./598117.js"),
  Chunk746622 = require("./746622.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk443899 = require("./443899.js");
let m = e => {
    let {
      setImage: t
    } = e, [n, o] = l.useState(null);
    return (0, r.jsx)("div", {
      className: d.emptyState,
      children: (0, r.jsxs)("div", {
        className: d.dropZone,
        children: [(0, r.jsx)(i.FmF, {
          size: "lg",
          color: i.TVs.colors.HEADER_MUTED,
          className: d.imagePlusIcon
        }), (0, r.jsxs)("div", {
          className: d.textContainer,
          children: [(0, r.jsx)(i.Text, {
            variant: "text-md/medium",
            children: c.intl.format(c.t["Ks2/3d"], {
              selectFileHook: (e, n) => (0, r.jsx)(f, {
                translatedContent: e,
                setUserImage: t
              }, n)
            })
          }), (0, r.jsx)(i.Text, {
            variant: "text-xs/normal",
            color: "text-tertiary",
            children: c.intl.string(c.t.UTE8Cw)
          })]
        }), null !== n && (0, r.jsx)(u.H, {
          error: s.ze.IMAGE_LOAD,
          variant: "text-sm/normal",
          color: "text-danger"
        }), (0, r.jsx)(a.X, {
          onSuccess: t,
          onError: o
        })]
      })
    })
  },
  f = e => {
    let {
      setUserImage: t,
      translatedContent: n
    } = e;
    return (0, r.jsx)(i.P3F, {
      focusProps: {
        within: true
      },
      tag: "a",
      children: (0, r.jsxs)("label", {
        children: [n, (0, r.jsx)(o.ZP, {
          tabIndex: 0,
          onChange: (e, n, r) => (t({
            data: e,
            file: n,
            image: r
          }), Promise.resolve(true)),
          multiple: false,
          title: ""
        })]
      })
    })
  }