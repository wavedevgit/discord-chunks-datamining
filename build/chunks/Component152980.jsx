/** Chunk was on 73628 **/
/** chunk id: 152980, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  s: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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

function b(e) {
  var A;
  let {
    upload: t,
    progress: a = 0,
    onDeleteAttachment: o
  } = e, s = r.useCallback(() => {
    null == o || o(t.id)
  }, [o, t.id]), c = a >= 1, u = a < 0, g = c || u, p = null != (A = t.filename) ? A : t.id, m = (0, f.kg)(a);
  return (0, n.jsx)(i.DY3, {
    text: m,
    children: (0, n.jsxs)("div", {
      className: l()(h.attachedFileCard, {
        [h.attachedFileCardError]: u,
        [h.attachedFileCardUploading]: !g
      }),
      children: [(0, n.jsx)(i.ZKT, {
        size: "xs",
        color: d.Z.INTERACTIVE_MUTED
      }), (0, n.jsx)(i.LZC, {
        size: 10,
        horizontal: true
      }), (0, n.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: p
      }), !g && (0, n.jsx)(i.$jN, {
        className: h.attachedFileCardSpinner,
        type: i.$jN.Type.SPINNING_CIRCLE
      }), g && null != o && (0, n.jsx)(i.P3F, {
        onClick: s,
        "aria-label": q.intl.formatToPlainString(q.t["1o5hyc"], {
          attachment: p
        }),
        "aria-hidden": false,
        className: h.deleteButton,
        children: (0, n.jsx)(i.Dio, {
          size: "xxs",
          color: "currentColor",
          className: h.__invalid_deleteIcon
        })
      })]
    })
  })
}

function v(e) {
  let {
    onFileAdded: A
  } = e, {
    uploads: t,
    canAttachFiles: a,
    canAttachArchives: l,
    addAttachment: d,
    deleteAttachment: c,
    fileUploadProgresses: f
  } = (0, g.P)(), v = r.useRef(false);

  function U(e) {
    try {
      for (let A of e) d({
        platform: s.ow.WEB,
        file: A,
        origin: "unknown:guild_product_attachment"
      });
      v.current = true
    } catch (e) {}
  }
  return r.useEffect(() => {
    v.current && (A(), v.current = false)
  }, [A]), (0, n.jsxs)("div", {
    className: h.container,
    children: [(0, n.jsx)(o.Z, {
      className: h.uploadArea,
      title: q.intl.string(q.t["5eTk2t"]),
      description: q.intl.string(q.t.Ecxoxs),
      icons: p.J6,
      onDrop: U
    }), (0, n.jsxs)(u.Z, {
      className: h.addFileButtonLook,
      innerClassName: h.addFileButton,
      disabled: !a,
      "aria-label": q.intl.string(q.t["23LeCA"]),
      "aria-describedby": C,
      multiple: true,
      onChange: function(e) {
        null != e.currentTarget.files && U(e.currentTarget.files)
      },
      children: [(0, n.jsx)(i.dZu, {
        size: "xs",
        color: "currentColor",
        className: h.addFileButtonIcon,
        "aria-hidden": true
      }), (0, n.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: q.intl.string(q.t["23LeCA"])
      })]
    }), (0, n.jsx)(i.LZC, {
      size: 12
    }), (0, n.jsx)(i.Text, {
      id: C,
      color: "text-muted",
      variant: "text-xs/normal",
      children: l ? q.intl.formatToPlainString(q.t.lvU6sr, {
        fileUploadLimit: m.TR
      }) : q.intl.formatToPlainString(q.t.DOXzIS, {
        fileUploadLimit: m.TR
      })
    }), t.length > 0 && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: h.separator
      }), (0, n.jsx)("ul", {
        className: h.attachedFilesContainer,
        "aria-label": q.intl.string(q.t.YZ6cTU),
        children: t.map(e => (0, n.jsx)("li", {
          children: (0, n.jsx)(b, {
            upload: e,
            onDeleteAttachment: c,
            progress: f[e.id]
          })
        }, e.id))
      })]
    })]
  })
}