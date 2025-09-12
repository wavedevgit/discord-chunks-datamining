/** Chunk was on 73628 **/
/** chunk id: 152980, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  s: () => U
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
let C = (0, Chunk313201.hQ)();

function v(A) {
  var e;
  let {
    upload: t,
    progress: a = 0,
    onDeleteAttachment: s
  } = A, d = r.useCallback(() => {
    null == s || s(t.id)
  }, [s, t.id]), u = a >= 1, f = a < 0, g = u || f, m = null != (e = t.filename) ? e : t.id, q = (0, p.kg)(a);
  return (0, n.jsx)(i.u, {
    asContainer: true,
    text: q,
    children: (0, n.jsxs)("div", {
      className: l()(b.attachedFileCard, {
        [b.attachedFileCardError]: f,
        [b.attachedFileCardUploading]: !g
      }),
      children: [(0, n.jsx)(o.ZKT, {
        size: "xs",
        color: c.Z.INTERACTIVE_MUTED
      }), (0, n.jsx)(o.LZC, {
        size: 10,
        horizontal: true
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: m
      }), !g && (0, n.jsx)(o.$jN, {
        className: b.attachedFileCardSpinner,
        type: o.$jN.Type.SPINNING_CIRCLE
      }), g && null != s && (0, n.jsx)(o.P3F, {
        onClick: d,
        "aria-label": h.intl.formatToPlainString(h.t["1o5hyc"], {
          attachment: m
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

function U(A) {
  let {
    onFileAdded: e
  } = A, {
    uploads: t,
    canAttachFiles: a,
    canAttachArchives: l,
    addAttachment: i,
    deleteAttachment: c,
    fileUploadProgresses: u
  } = (0, g.P)(), p = r.useRef(false);

  function U(A) {
    try {
      for (let e of A) i({
        platform: d.ow.WEB,
        file: e,
        origin: "unknown:guild_product_attachment"
      });
      p.current = true
    } catch (A) {}
  }
  return r.useEffect(() => {
    p.current && (e(), p.current = false)
  }, [e]), (0, n.jsxs)("div", {
    className: b.container,
    children: [(0, n.jsx)(s.Z, {
      className: b.uploadArea,
      title: h.intl.string(h.t["5eTk2t"]),
      description: h.intl.string(h.t.Ecxoxs),
      icons: m.J6,
      onDrop: U
    }), (0, n.jsxs)(f.Z, {
      className: b.addFileButtonLook,
      innerClassName: b.addFileButton,
      disabled: !a,
      "aria-label": h.intl.string(h.t["23LeCA"]),
      "aria-describedby": C,
      multiple: true,
      onChange: function(A) {
        null != A.currentTarget.files && U(A.currentTarget.files)
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
      id: C,
      color: "text-muted",
      variant: "text-xs/normal",
      children: l ? h.intl.formatToPlainString(h.t.lvU6sr, {
        fileUploadLimit: q.TR
      }) : h.intl.formatToPlainString(h.t.DOXzIS, {
        fileUploadLimit: q.TR
      })
    }), t.length > 0 && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: b.separator
      }), (0, n.jsx)("ul", {
        className: b.attachedFilesContainer,
        "aria-label": h.intl.string(h.t.YZ6cTU),
        children: t.map(A => (0, n.jsx)("li", {
          children: (0, n.jsx)(v, {
            upload: A,
            onDeleteAttachment: c,
            progress: u[A.id]
          })
        }, A.id))
      })]
    })]
  })
}