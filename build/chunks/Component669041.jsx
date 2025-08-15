/** Chunk was on web.js **/
/** chunk id: 669041, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => m,
  QuestsRewardModalUnverified: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk594174 = require("./594174.js"),
  Chunk509212 = require("./509212.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk803035 = require("./803035.js"),
  Chunk800010 = require("./800010.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, _ = (0, a.e7)([l.default], () => {
    var e;
    return null == (e = l.default.getCurrentUser()) ? true : e.email
  }), [p, h] = i.useState({
    status: "unknown"
  });
  i.useEffect(() => {
    h({
      status: "loading"
    }), s.Z.verifyResend().then(() => h({
      status: "success"
    }), e => {
      h({
        status: "error"
      }), (0, c.ys)(e, {
        tags: {
          location: "QuestsRewardModalUnverified"
        }
      })
    })
  }, []);
  let m = () => (0, r.jsx)(o.mzw, {
    className: d.modalFooter,
    children: (0, r.jsx)(o.zxk, {
      variant: "primary",
      text: u.intl.string(u.t.cpT0Cg),
      onClick: n
    })
  });
  return (0, r.jsxs)(o.Y0X, {
    transitionState: t,
    disableTrack: true,
    parentComponent: "QuestsRewardModalUnverified",
    children: [(0, r.jsx)("img", {
      alt: "",
      className: d.headerImage,
      src: f
    }), (0, r.jsxs)(o.xBx, {
      separator: false,
      className: d.header,
      children: [(0, r.jsx)(o.X6q, {
        className: d.title,
        variant: "heading-xl/bold",
        children: u.intl.string(u.t.c8eASE)
      }), (0, r.jsx)(o.olH, {
        onClick: n,
        className: d.modalCloseButton
      })]
    }), "loading" === p.status && (0, r.jsx)(o.hzk, {
      className: d.content,
      children: (0, r.jsx)(o.$jN, {})
    }), "error" === p.status && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.hzk, {
        className: d.content,
        children: (0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          children: u.intl.string(u.t.vjyinp)
        })
      }), m()]
    }), "success" === p.status && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.hzk, {
        className: d.content,
        children: (0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          children: u.intl.format(u.t.qP5xYW, {
            emailAddress: _,
            emailAddressLink: "mailto:".concat(_)
          })
        })
      }), (0, r.jsx)(o.hzk, {
        className: d.content,
        children: (0, r.jsxs)("div", {
          className: d.tooltip,
          children: [(0, r.jsx)(o.d3s, {
            size: "xs",
            color: "currentColor",
            className: d.infoFilledIcon
          }), (0, r.jsx)(o.Text, {
            className: d.tooltipText,
            variant: "text-sm/normal",
            children: u.intl.string(u.t.yb7itb)
          })]
        })
      }), m()]
    })]
  })
}

function m() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      QuestsRewardModalUnverified: e
    } = await Promise.resolve().then(require.bind(require, 669041));
    return t => (0, r.jsx)(e, p({}, t))
  })
}