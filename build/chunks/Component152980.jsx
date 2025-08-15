/** Chunk was on 73628 **/
/** chunk id: 152980, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  s: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
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
let C = (0, Chunk313201.hQ)();

function q(e) {
  var t;
  let {
    upload: A,
    progress: a = 0,
    onDeleteAttachment: s
  } = e, c = r.useCallback(() => {
    null == s || s(A.id)
  }, [s, A.id]), u = a >= 1, g = a < 0, f = u || g, h = null != (t = A.filename) ? t : A.id, m = (0, p.kg)(a);
  return (0, n.jsx)(o.DY3, {
    text: m,
    children: (0, n.jsxs)("div", {
      className: l()(b.attachedFileCard, {
        [b.attachedFileCardError]: g,
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
        children: h
      }), !f && (0, n.jsx)(o.$jN, {
        className: b.attachedFileCardSpinner,
        type: o.$jN.Type.SPINNING_CIRCLE
      }), f && null != s && (0, n.jsx)(i.zx, {
        "aria-label": v.intl.formatToPlainString(v.t["1o5hyc"], {
          attachment: h
        }),
        className: b.deleteButton,
        innerClassName: b.deleteButtonInner,
        look: i.zx.Looks.BLANK,
        size: i.zx.Sizes.NONE,
        onClick: c,
        children: (0, n.jsx)(o.Dio, {
          size: "xxs",
          color: "currentColor",
          className: b.__invalid_deleteIcon
        })
      })]
    })
  })
}

function x(e) {
  let {
    onFileAdded: t
  } = e, {
    uploads: A,
    canAttachFiles: a,
    canAttachArchives: l,
    addAttachment: d,
    deleteAttachment: u,
    fileUploadProgresses: p
  } = (0, f.P)(), x = r.useRef(false);

  function j(e) {
    try {
      for (let t of e) d({
        platform: c.ow.WEB,
        file: t,
        origin: "unknown:guild_product_attachment"
      });
      x.current = true
    } catch (e) {}
  }
  return r.useEffect(() => {
    x.current && (t(), x.current = false)
  }, [t]), (0, n.jsxs)("div", {
    className: b.container,
    children: [(0, n.jsx)(s.Z, {
      className: b.uploadArea,
      title: v.intl.string(v.t["5eTk2t"]),
      description: v.intl.string(v.t.Ecxoxs),
      icons: h.J6,
      onDrop: j
    }), (0, n.jsxs)(g.Z, {
      className: b.addFileButtonLook,
      innerClassName: b.addFileButton,
      color: i.zx.Colors.CUSTOM,
      disabled: !a,
      "aria-label": v.intl.string(v.t["23LeCA"]),
      "aria-describedby": C,
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
        children: v.intl.string(v.t["23LeCA"])
      })]
    }), (0, n.jsx)(o.LZC, {
      size: 12
    }), (0, n.jsx)(o.Text, {
      id: C,
      color: "text-muted",
      variant: "text-xs/normal",
      children: l ? v.intl.formatToPlainString(v.t.lvU6sr, {
        fileUploadLimit: m.TR
      }) : v.intl.formatToPlainString(v.t.DOXzIS, {
        fileUploadLimit: m.TR
      })
    }), A.length > 0 && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: b.separator
      }), (0, n.jsx)("ul", {
        className: b.attachedFilesContainer,
        "aria-label": v.intl.string(v.t.YZ6cTU),
        children: A.map(e => (0, n.jsx)("li", {
          children: (0, n.jsx)(q, {
            upload: e,
            onDeleteAttachment: u,
            progress: p[e.id]
          })
        }, e.id))
      })]
    })]
  })
}