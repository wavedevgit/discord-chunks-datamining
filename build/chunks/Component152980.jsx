/** Chunk was on 73628 **/
/** chunk id: 152980, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  s: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
let q = (0, Chunk313201.hQ)();

function C(e) {
  var t;
  let {
    upload: A,
    progress: l = 0,
    onDeleteAttachment: i
  } = e, s = r.useCallback(() => {
    null == i || i(A.id)
  }, [i, A.id]), c = l >= 1, u = l < 0, f = c || u, p = null != (t = A.filename) ? t : A.id, m = (0, g.kg)(l);
  return (0, n.jsx)(o.DY3, {
    text: m,
    children: (0, n.jsxs)("div", {
      className: a()(b.attachedFileCard, {
        [b.attachedFileCardError]: u,
        [b.attachedFileCardUploading]: !f
      }),
      children: [(0, n.jsx)(o.ZKT, {
        size: "xs",
        color: d.Z.INTERACTIVE_MUTED
      }), (0, n.jsx)(o.LZC, {
        size: 10,
        horizontal: true
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: p
      }), !f && (0, n.jsx)(o.$jN, {
        className: b.attachedFileCardSpinner,
        type: o.$jN.Type.SPINNING_CIRCLE
      }), f && null != i && (0, n.jsx)(o.P3F, {
        onClick: s,
        "aria-label": h.intl.formatToPlainString(h.t["1o5hyc"], {
          attachment: p
        }),
        "aria-hidden": false,
        className: b.deleteButton,
        children: (0, n.jsx)(o.Dio, {
          size: "xxs",
          color: "currentColor",
          className: b.__invalid_deleteIcon
        })
      })]
    })
  })
}

function v(e) {
  let {
    onFileAdded: t
  } = e, {
    uploads: A,
    canAttachFiles: l,
    canAttachArchives: a,
    addAttachment: d,
    deleteAttachment: c,
    fileUploadProgresses: g
  } = (0, f.P)(), v = r.useRef(false);

  function j(e) {
    try {
      for (let t of e) d({
        platform: s.ow.WEB,
        file: t,
        origin: "unknown:guild_product_attachment"
      });
      v.current = true
    } catch (e) {}
  }
  return r.useEffect(() => {
    v.current && (t(), v.current = false)
  }, [t]), (0, n.jsxs)("div", {
    className: b.container,
    children: [(0, n.jsx)(i.Z, {
      className: b.uploadArea,
      title: h.intl.string(h.t["5eTk2t"]),
      description: h.intl.string(h.t.Ecxoxs),
      icons: p.J6,
      onDrop: j
    }), (0, n.jsxs)(u.Z, {
      className: b.addFileButtonLook,
      innerClassName: b.addFileButton,
      disabled: !l,
      "aria-label": h.intl.string(h.t["23LeCA"]),
      "aria-describedby": q,
      multiple: true,
      onChange: function(e) {
        null != e.currentTarget.files && j(e.currentTarget.files)
      },
      children: [(0, n.jsx)(o.dZu, {
        size: "xs",
        color: "currentColor",
        className: b.addFileButtonIcon,
        "aria-hidden": true
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: h.intl.string(h.t["23LeCA"])
      })]
    }), (0, n.jsx)(o.LZC, {
      size: 12
    }), (0, n.jsx)(o.Text, {
      id: q,
      color: "text-muted",
      variant: "text-xs/normal",
      children: a ? h.intl.formatToPlainString(h.t.lvU6sr, {
        fileUploadLimit: m.TR
      }) : h.intl.formatToPlainString(h.t.DOXzIS, {
        fileUploadLimit: m.TR
      })
    }), A.length > 0 && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: b.separator
      }), (0, n.jsx)("ul", {
        className: b.attachedFilesContainer,
        "aria-label": h.intl.string(h.t.YZ6cTU),
        children: A.map(e => (0, n.jsx)("li", {
          children: (0, n.jsx)(C, {
            upload: e,
            onDeleteAttachment: c,
            progress: g[e.id]
          })
        }, e.id))
      })]
    })]
  })
}