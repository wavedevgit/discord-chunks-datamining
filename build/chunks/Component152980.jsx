/** Chunk was on 73628 **/
/** chunk id: 152980, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  s: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  var t;
  let {
    upload: A,
    progress: a = 0,
    onDeleteAttachment: s
  } = e, d = n.useCallback(() => {
    null == s || s(A.id)
  }, [s, A.id]), u = a >= 1, g = a < 0, f = u || g, m = null != (t = A.filename) ? t : A.id, h = (0, p.kg)(a);
  return (0, r.jsx)(i.u, {
    asContainer: true,
    text: h,
    children: (0, r.jsxs)("div", {
      className: l()(q.attachedFileCard, {
        [q.attachedFileCardError]: g,
        [q.attachedFileCardUploading]: !f
      }),
      children: [(0, r.jsx)(o.ZKT, {
        size: "xs",
        color: c.Z.INTERACTIVE_MUTED
      }), (0, r.jsx)(o.LZC, {
        size: 10,
        horizontal: true
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: m
      }), !f && (0, r.jsx)(o.$jN, {
        className: q.attachedFileCardSpinner,
        type: o.$jN.Type.SPINNING_CIRCLE
      }), f && null != s && (0, r.jsx)(o.P3F, {
        onClick: d,
        "aria-label": v.intl.formatToPlainString(v.t["1o5hyc"], {
          attachment: m
        }),
        "aria-hidden": false,
        className: q.deleteButton,
        children: (0, r.jsx)(o.Dio, {
          size: "xxs",
          color: "currentColor",
          className: q.__invalid_deleteIcon
        })
      })]
    })
  })
}

function j(e) {
  let {
    onFileAdded: t
  } = e, {
    uploads: A,
    canAttachFiles: a,
    canAttachArchives: l,
    addAttachment: i,
    deleteAttachment: c,
    fileUploadProgresses: u
  } = (0, f.P)(), p = n.useRef(false);

  function j(e) {
    try {
      for (let t of e) i({
        platform: d.ow.WEB,
        file: t,
        origin: "unknown:guild_product_attachment"
      });
      p.current = true
    } catch (e) {}
  }
  return n.useEffect(() => {
    p.current && (t(), p.current = false)
  }, [t]), (0, r.jsxs)("div", {
    className: q.container,
    children: [(0, r.jsx)(s.Z, {
      className: q.uploadArea,
      title: v.intl.string(v.t["5eTk2t"]),
      description: v.intl.string(v.t.Ecxoxs),
      icons: m.J6,
      onDrop: j
    }), (0, r.jsxs)(g.Z, {
      className: q.addFileButtonLook,
      innerClassName: q.addFileButton,
      disabled: !a,
      "aria-label": v.intl.string(v.t["23LeCA"]),
      "aria-describedby": b,
      multiple: true,
      onChange: function(e) {
        null != e.currentTarget.files && j(e.currentTarget.files)
      },
      children: [(0, r.jsx)(o.dZu, {
        size: "xs",
        color: "currentColor",
        className: q.addFileButtonIcon,
        "aria-hidden": true
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: v.intl.string(v.t["23LeCA"])
      })]
    }), (0, r.jsx)(o.LZC, {
      size: 12
    }), (0, r.jsx)(o.Text, {
      id: b,
      color: "text-muted",
      variant: "text-xs/normal",
      children: l ? v.intl.formatToPlainString(v.t.lvU6sr, {
        fileUploadLimit: h.TR
      }) : v.intl.formatToPlainString(v.t.DOXzIS, {
        fileUploadLimit: h.TR
      })
    }), A.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: q.separator
      }), (0, r.jsx)("ul", {
        className: q.attachedFilesContainer,
        "aria-label": v.intl.string(v.t.YZ6cTU),
        children: A.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(C, {
            upload: e,
            onDeleteAttachment: c,
            progress: u[e.id]
          })
        }, e.id))
      })]
    })]
  })
}