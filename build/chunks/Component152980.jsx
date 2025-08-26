/** Chunk was on 73628 **/
/** chunk id: 152980, original params: e,A,t (module,exports,require) **/
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
let h = (0, Chunk313201.hQ)();

function C(e) {
  var A;
  let {
    upload: t,
    progress: l = 0,
    onDeleteAttachment: o
  } = e, s = r.useCallback(() => {
    null == o || o(t.id)
  }, [o, t.id]), c = l >= 1, u = l < 0, f = c || u, p = null != (A = t.filename) ? A : t.id, m = (0, g.kg)(l);
  return (0, n.jsx)(i.DY3, {
    text: m,
    children: (0, n.jsxs)("div", {
      className: a()(q.attachedFileCard, {
        [q.attachedFileCardError]: u,
        [q.attachedFileCardUploading]: !f
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
      }), !f && (0, n.jsx)(i.$jN, {
        className: q.attachedFileCardSpinner,
        type: i.$jN.Type.SPINNING_CIRCLE
      }), f && null != o && (0, n.jsx)(i.P3F, {
        onClick: s,
        "aria-label": b.intl.formatToPlainString(b.t["1o5hyc"], {
          attachment: p
        }),
        "aria-hidden": false,
        className: q.deleteButton,
        children: (0, n.jsx)(i.Dio, {
          size: "xxs",
          color: "currentColor",
          className: q.__invalid_deleteIcon
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
    canAttachFiles: l,
    canAttachArchives: a,
    addAttachment: d,
    deleteAttachment: c,
    fileUploadProgresses: g
  } = (0, f.P)(), v = r.useRef(false);

  function j(e) {
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
    className: q.container,
    children: [(0, n.jsx)(o.Z, {
      className: q.uploadArea,
      title: b.intl.string(b.t["5eTk2t"]),
      description: b.intl.string(b.t.Ecxoxs),
      icons: p.J6,
      onDrop: j
    }), (0, n.jsxs)(u.Z, {
      className: q.addFileButtonLook,
      innerClassName: q.addFileButton,
      disabled: !l,
      "aria-label": b.intl.string(b.t["23LeCA"]),
      "aria-describedby": h,
      multiple: true,
      onChange: function(e) {
        null != e.currentTarget.files && j(e.currentTarget.files)
      },
      children: [(0, n.jsx)(i.dZu, {
        size: "xs",
        color: "currentColor",
        className: q.addFileButtonIcon,
        "aria-hidden": true
      }), (0, n.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: b.intl.string(b.t["23LeCA"])
      })]
    }), (0, n.jsx)(i.LZC, {
      size: 12
    }), (0, n.jsx)(i.Text, {
      id: h,
      color: "text-muted",
      variant: "text-xs/normal",
      children: a ? b.intl.formatToPlainString(b.t.lvU6sr, {
        fileUploadLimit: m.TR
      }) : b.intl.formatToPlainString(b.t.DOXzIS, {
        fileUploadLimit: m.TR
      })
    }), t.length > 0 && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: q.separator
      }), (0, n.jsx)("ul", {
        className: q.attachedFilesContainer,
        "aria-label": b.intl.string(b.t.YZ6cTU),
        children: t.map(e => (0, n.jsx)("li", {
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