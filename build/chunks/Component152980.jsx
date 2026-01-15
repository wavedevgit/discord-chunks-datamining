/** Chunk was on 73628 **/
/** chunk id: 152980, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  s: () => U
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk205822 = require("./205822.jsx"),
  Chunk476326 = require("./476326.js"),
  Chunk313201 = require("./313201.js"),
  Chunk374794 = require("./374794.jsx"),
  Chunk587123 = require("./587123.jsx"),
  Chunk863663 = require("./863663.js"),
  Chunk731994 = require("./731994.js"),
  Chunk629481 = require("./629481.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk994959 = require("./994959.js");
let b = (0, Chunk313201.hQ)();

function C(e) {
  var t;
  let {
    upload: A,
    progress: a = 0,
    onDeleteAttachment: d
  } = e, c = r.useCallback(() => {
    null == d || d(A.id)
  }, [d, A.id]), u = a >= 1, f = a < 0, g = u || f, m = null != (t = A.filename) ? t : A.id, v = (0, p.kg)(a);
  return (0, n.jsx)(o.u, {
    asContainer: true,
    text: v,
    children: (0, n.jsxs)("div", {
      className: l()(q.attachedFileCard, {
        [q.attachedFileCardError]: f,
        [q.attachedFileCardUploading]: !g
      }),
      children: [(0, n.jsx)(s.ZKT, {
        size: "xs",
        color: i.Z.colors.ICON_MUTED.css
      }), (0, n.jsx)(s.LZC, {
        size: 10,
        horizontal: true
      }), (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: m
      }), !g && (0, n.jsx)(s.$jN, {
        className: q.attachedFileCardSpinner,
        type: s.$jN.Type.SPINNING_CIRCLE
      }), g && null != d && (0, n.jsx)(s.P3F, {
        onClick: c,
        "aria-label": h.intl.formatToPlainString(h.t["1o5hyW"], {
          attachment: m
        }),
        "aria-hidden": false,
        className: q.deleteButton,
        children: (0, n.jsx)(s.Dio, {
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
    canAttachArchives: l,
    addAttachment: i,
    deleteAttachment: o,
    fileUploadProgresses: u
  } = (0, g.P)(), p = r.useRef(false);

  function U(e) {
    try {
      for (let t of e) i({
        platform: c.ow.WEB,
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
    children: [(0, n.jsx)(d.Z, {
      className: q.uploadArea,
      title: h.intl.string(h.t["5eTk2g"]),
      description: h.intl.string(h.t.Ecxoxl),
      icons: m.J6,
      onDrop: U
    }), (0, n.jsxs)(f.Z, {
      className: q.addFileButtonLook,
      innerClassName: q.addFileButton,
      disabled: !a,
      "aria-label": h.intl.string(h.t["23LeCD"]),
      "aria-describedby": b,
      multiple: true,
      onChange: function(e) {
        null != e.currentTarget.files && U(e.currentTarget.files)
      },
      children: [(0, n.jsx)(s.dZu, {
        size: "xs",
        color: "currentColor",
        className: q.addFileButtonIcon,
        "aria-hidden": true
      }), (0, n.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: h.intl.string(h.t["23LeCD"])
      })]
    }), (0, n.jsx)(s.LZC, {
      size: 12
    }), (0, n.jsx)(s.Text, {
      id: b,
      color: "text-muted",
      variant: "text-xs/normal",
      children: l ? h.intl.formatToPlainString(h.t.lvU6sr, {
        fileUploadLimit: v.TR
      }) : h.intl.formatToPlainString(h.t.DOXzIU, {
        fileUploadLimit: v.TR
      })
    }), A.length > 0 && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: q.separator
      }), (0, n.jsx)("ul", {
        className: q.attachedFilesContainer,
        "aria-label": h.intl.string(h.t.YZ6cTW),
        children: A.map(e => (0, n.jsx)("li", {
          children: (0, n.jsx)(C, {
            upload: e,
            onDeleteAttachment: o,
            progress: u[e.id]
          })
        }, e.id))
      })]
    })]
  })
}