/** Chunk was on 2262 **/
/** chunk id: 903759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => h
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
let h = e => {
    let {
      setImage: t
    } = e, [n, s] = i.useState(null);
    return (0, r.jsx)("div", {
      className: d.emptyState,
      children: (0, r.jsxs)("div", {
        className: d.dropZone,
        children: [(0, r.jsx)(l.FmF, {
          size: "lg",
          color: l.TVs.colors.HEADER_MUTED,
          className: d.imagePlusIcon
        }), (0, r.jsxs)("div", {
          className: d.textContainer,
          children: [(0, r.jsx)(l.Text, {
            variant: "text-md/medium",
            children: c.intl.format(c.t["Ks2/3R"], {
              selectFileHook: (e, n) => (0, r.jsx)(m, {
                translatedContent: e,
                setUserImage: t
              }, n)
            })
          }), (0, r.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "text-tertiary",
            children: c.intl.string(c.t["UTE8C/"])
          })]
        }), null !== n && (0, r.jsx)(u.H4, {
          error: o.ze.IMAGE_LOAD,
          variant: "text-sm/normal",
          color: "text-danger"
        }), (0, r.jsx)(a.X, {
          onSuccess: t,
          onError: s
        })]
      })
    })
  },
  m = e => {
    let {
      setUserImage: t,
      translatedContent: n
    } = e;
    return (0, r.jsx)(l.P3F, {
      focusProps: {
        within: true
      },
      tag: "a",
      children: (0, r.jsxs)("label", {
        children: [n, (0, r.jsx)(s.ZP, {
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