/** Chunk was on 67096 **/
/** chunk id: 563838, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  F: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk65593 = require("./65593.jsx"),
  Chunk565150 = require("./565150.js"),
  Chunk915089 = require("./915089.js"),
  Chunk703007 = require("./703007.jsx"),
  Chunk464990 = require("./464990.jsx"),
  Chunk253141 = require("./253141.js"),
  Chunk698638 = require("./698638.js");
require("./634654.js");
var Chunk985018 = require("./985018.jsx"),
  Chunk9040 = require("./9040.js");
let q = (0, Chunk915089.Ld)();

function h(e) {
  var A;
  let {
    upload: t,
    progress: l = 0,
    onDeleteAttachment: d
  } = e, c = n.useCallback(() => {
    null == d || d(t.id)
  }, [d, t.id]), u = l >= 1, g = l < 0, f = u || g, m = null != (A = t.filename) ? A : t.id, q = (0, p.kt)(l);
  return (0, r.jsx)(s.m, {
    asContainer: true,
    text: q,
    children: (0, r.jsxs)("div", {
      className: a()(v.hC, {
        [v.t]: g,
        [v.ik]: !f
      }),
      children: [(0, r.jsx)(o.DF1, {
        size: "xs",
        color: i.A.colors.ICON_MUTED.css
      }), (0, r.jsx)(o.hKd, {
        size: 10,
        horizontal: true
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: m
      }), !f && (0, r.jsx)(o.y$y, {
        className: v.eD,
        type: o.y$y.Type.SPINNING_CIRCLE
      }), f && null != d && (0, r.jsx)(o.DUT, {
        onClick: c,
        "aria-label": b.intl.formatToPlainString(b.t["1o5hyW"], {
          attachment: m
        }),
        "aria-hidden": false,
        className: v.G5,
        children: (0, r.jsx)(o.PGe, {
          size: "xxs",
          color: "currentColor",
          className: v.__invalid_deleteIcon
        })
      })]
    })
  })
}

function C(e) {
  let {
    onFileAdded: A
  } = e, {
    uploads: t,
    canAttachFiles: l,
    canAttachArchives: a,
    addAttachment: i,
    deleteAttachment: s,
    fileUploadProgresses: u
  } = (0, f.Z)(), p = n.useRef(false);

  function C(e) {
    try {
      for (let A of e) i({
        platform: c.xz.WEB,
        file: A,
        origin: "unknown:guild_product_attachment"
      });
      p.current = true
    } catch (e) {}
  }
  return n.useEffect(() => {
    p.current && (A(), p.current = false)
  }, [A]), (0, r.jsxs)("div", {
    className: v.kL,
    children: [(0, r.jsx)(d.A, {
      className: v.x4,
      title: b.intl.string(b.t["5eTk2g"]),
      description: b.intl.string(b.t.Ecxoxl),
      icons: m.ir,
      onDrop: C
    }), (0, r.jsxs)(g.A, {
      className: v.zd,
      innerClassName: v._3,
      disabled: !l,
      "aria-label": b.intl.string(b.t["23LeCD"]),
      "aria-describedby": q,
      multiple: true,
      onChange: function(e) {
        null != e.currentTarget.files && C(e.currentTarget.files)
      },
      children: [(0, r.jsx)(o.kpT, {
        size: "xs",
        color: "currentColor",
        className: v.T8,
        "aria-hidden": true
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: b.intl.string(b.t["23LeCD"])
      })]
    }), (0, r.jsx)(o.hKd, {
      size: 12
    }), (0, r.jsx)(o.Text, {
      id: q,
      color: "text-muted",
      variant: "text-xs/normal",
      children: a ? b.intl.formatToPlainString(b.t.lvU6sr, {
        fileUploadLimit: "1 GB"
      }) : b.intl.formatToPlainString(b.t.DOXzIU, {
        fileUploadLimit: "1 GB"
      })
    }), t.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: v.me
      }), (0, r.jsx)("ul", {
        className: v.$W,
        "aria-label": b.intl.string(b.t.YZ6cTW),
        children: t.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(h, {
            upload: e,
            onDeleteAttachment: s,
            progress: u[e.id]
          })
        }, e.id))
      })]
    })]
  })
}