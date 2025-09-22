/** Chunk was on 73628 **/
/** chunk id: 152980, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  s: () => U
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk205822 = require("./205822.jsx"),
  Chunk476326 = require("./476326.js"),
  Chunk377171 = require("./377171.js"),
  Chunk313201 = require("./313201.js"),
  Chunk374794 = require("./374794.jsx"),
  Chunk587123 = require("./587123.jsx"),
  Chunk863663 = require("./863663.js"),
  Chunk731994 = require("./731994.js"),
  Chunk629481 = require("./629481.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk530521 = require("./530521.js");
let b = (0, Chunk313201.hQ)();

function C(e) {
  var A;
  let {
    upload: t,
    progress: l = 0,
    onDeleteAttachment: s
  } = e, d = r.useCallback(() => {
    null == s || s(t.id)
  }, [s, t.id]), c = l >= 1, g = l < 0, f = c || g, m = null != (A = t.filename) ? A : t.id, q = (0, p.kg)(l);
  return (0, n.jsx)(i.u, {
    asContainer: true,
    text: q,
    children: (0, n.jsxs)("div", {
      className: a()(v.attachedFileCard, {
        [v.attachedFileCardError]: g,
        [v.attachedFileCardUploading]: !f
      }),
      children: [(0, n.jsx)(o.ZKT, {
        size: "xs",
        color: u.Z.INTERACTIVE_MUTED
      }), (0, n.jsx)(o.LZC, {
        size: 10,
        horizontal: true
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: m
      }), !f && (0, n.jsx)(o.$jN, {
        className: v.attachedFileCardSpinner,
        type: o.$jN.Type.SPINNING_CIRCLE
      }), f && null != s && (0, n.jsx)(o.P3F, {
        onClick: d,
        "aria-label": h.intl.formatToPlainString(h.t["1o5hyc"], {
          attachment: m
        }),
        "aria-hidden": false,
        className: v.deleteButton,
        children: (0, n.jsx)(o.Dio, {
          size: "xxs",
          color: "currentColor",
          className: v.__invalid_deleteIcon
        })
      })]
    })
  })
}

function U(e) {
  let {
    onFileAdded: A
  } = e, {
    uploads: t,
    canAttachFiles: l,
    canAttachArchives: a,
    addAttachment: i,
    deleteAttachment: u,
    fileUploadProgresses: c
  } = (0, f.P)(), p = r.useRef(false);

  function U(e) {
    try {
      for (let A of e) i({
        platform: d.ow.WEB,
        file: A,
        origin: "unknown:guild_product_attachment"
      });
      p.current = true
    } catch (e) {}
  }
  return r.useEffect(() => {
    p.current && (A(), p.current = false)
  }, [A]), (0, n.jsxs)("div", {
    className: v.container,
    children: [(0, n.jsx)(s.Z, {
      className: v.uploadArea,
      title: h.intl.string(h.t["5eTk2t"]),
      description: h.intl.string(h.t.Ecxoxs),
      icons: m.J6,
      onDrop: U
    }), (0, n.jsxs)(g.Z, {
      className: v.addFileButtonLook,
      innerClassName: v.addFileButton,
      disabled: !l,
      "aria-label": h.intl.string(h.t["23LeCA"]),
      "aria-describedby": b,
      multiple: true,
      onChange: function(e) {
        null != e.currentTarget.files && U(e.currentTarget.files)
      },
      children: [(0, n.jsx)(o.dZu, {
        size: "xs",
        color: "currentColor",
        className: v.addFileButtonIcon,
        "aria-hidden": true
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: h.intl.string(h.t["23LeCA"])
      })]
    }), (0, n.jsx)(o.LZC, {
      size: 12
    }), (0, n.jsx)(o.Text, {
      id: b,
      color: "text-muted",
      variant: "text-xs/normal",
      children: a ? h.intl.formatToPlainString(h.t.lvU6sr, {
        fileUploadLimit: q.TR
      }) : h.intl.formatToPlainString(h.t.DOXzIS, {
        fileUploadLimit: q.TR
      })
    }), t.length > 0 && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: v.separator
      }), (0, n.jsx)("ul", {
        className: v.attachedFilesContainer,
        "aria-label": h.intl.string(h.t.YZ6cTU),
        children: t.map(e => (0, n.jsx)("li", {
          children: (0, n.jsx)(C, {
            upload: e,
            onDeleteAttachment: u,
            progress: c[e.id]
          })
        }, e.id))
      })]
    })]
  })
}