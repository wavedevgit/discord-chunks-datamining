/** Chunk was on 73628 **/
/** chunk id: 152980, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  s: () => U
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk45856 = require("./45856.js");
let b = (0, Chunk313201.hQ)();

function C(e) {
  var t;
  let {
    upload: A,
    progress: a = 0,
    onDeleteAttachment: s
  } = e, d = r.useCallback(() => {
    null == s || s(A.id)
  }, [s, A.id]), c = a >= 1, g = a < 0, f = c || g, m = null != (t = A.filename) ? t : A.id, h = (0, p.kg)(a);
  return (0, n.jsx)(l.u, {
    asContainer: true,
    text: h,
    children: (0, n.jsxs)("div", {
      className: i()(q.attachedFileCard, {
        [q.attachedFileCardError]: g,
        [q.attachedFileCardUploading]: !f
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
        className: q.attachedFileCardSpinner,
        type: o.$jN.Type.SPINNING_CIRCLE
      }), f && null != s && (0, n.jsx)(o.P3F, {
        onClick: d,
        "aria-label": v.intl.formatToPlainString(v.t["1o5hyW"], {
          attachment: m
        }),
        "aria-hidden": false,
        className: q.deleteButton,
        children: (0, n.jsx)(o.Dio, {
          size: "xxs",
          color: "currentColor",
          className: q.__invalid_deleteIcon
        })
      })]
    })
  })
}

function U(e) {
  let {
    onFileAdded: t
  } = e, {
    uploads: A,
    canAttachFiles: a,
    canAttachArchives: i,
    addAttachment: l,
    deleteAttachment: u,
    fileUploadProgresses: c
  } = (0, f.P)(), p = r.useRef(false);

  function U(e) {
    try {
      for (let t of e) l({
        platform: d.ow.WEB,
        file: t,
        origin: "unknown:guild_product_attachment"
      });
      p.current = true
    } catch (e) {}
  }
  return r.useEffect(() => {
    p.current && (t(), p.current = false)
  }, [t]), (0, n.jsxs)("div", {
    className: q.container,
    children: [(0, n.jsx)(s.Z, {
      className: q.uploadArea,
      title: v.intl.string(v.t["5eTk2g"]),
      description: v.intl.string(v.t.Ecxoxl),
      icons: m.J6,
      onDrop: U
    }), (0, n.jsxs)(g.Z, {
      className: q.addFileButtonLook,
      innerClassName: q.addFileButton,
      disabled: !a,
      "aria-label": v.intl.string(v.t["23LeCD"]),
      "aria-describedby": b,
      multiple: true,
      onChange: function(e) {
        null != e.currentTarget.files && U(e.currentTarget.files)
      },
      children: [(0, n.jsx)(o.dZu, {
        size: "xs",
        color: "currentColor",
        className: q.addFileButtonIcon,
        "aria-hidden": true
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: v.intl.string(v.t["23LeCD"])
      })]
    }), (0, n.jsx)(o.LZC, {
      size: 12
    }), (0, n.jsx)(o.Text, {
      id: b,
      color: "text-muted",
      variant: "text-xs/normal",
      children: i ? v.intl.formatToPlainString(v.t.lvU6sr, {
        fileUploadLimit: h.TR
      }) : v.intl.formatToPlainString(v.t.DOXzIU, {
        fileUploadLimit: h.TR
      })
    }), A.length > 0 && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: q.separator
      }), (0, n.jsx)("ul", {
        className: q.attachedFilesContainer,
        "aria-label": v.intl.string(v.t.YZ6cTW),
        children: A.map(e => (0, n.jsx)("li", {
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