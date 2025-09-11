/** Chunk was on 69773 **/
/** chunk id: 581690, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => m
}), require("./35282.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk198993 = require("./198993.jsx"),
  Chunk885006 = require("./885006.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk911839 = require("./911839.js");
let Chunk412998 = require("./412998.js"),
  Chunk515695 = require("./515695.js"),
  h = "".concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT.split("//")[1]).concat(Chunk981631.Z5c.ACTIVATE),
  p = "".concat(location.protocol, "//").concat(h);

function x(e) {
  let {
    text: t = ""
  } = e, [n, l] = r.useState(false);
  return r.useEffect(() => {
    let e = new Image;
    e.src = f, e.onload = () => l(true), e.onerror = () => l(true)
  }, [f]), "" !== t && n ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.ZP, {
      size: 288,
      text: t
    }), (0, a.jsx)("div", {
      className: d.qrcodeOverlay,
      children: (0, a.jsx)("img", {
        src: f,
        alt: ""
      })
    })]
  }) : (0, a.jsx)("div", {
    className: d.qrcodeSpinner,
    children: (0, a.jsx)(o.$jN, {
      type: o.$jN.Type.WANDERING_CUBES
    })
  })
}
let m = e => {
  var t;
  let {
    code: n
  } = e, {
    width: r,
    height: i
  } = (0, l.Z)();
  return null == n || 0 === n.length ? null : (0, a.jsxs)("div", {
    className: d.panel,
    style: {
      zoom: Math.min(r / 1460, i / 1080, 1)
    },
    children: [(0, a.jsx)("div", {
      className: d.panelHeader,
      children: (0, a.jsx)("div", {
        className: d.logo
      })
    }), (0, a.jsxs)("div", {
      className: d.panelContent,
      children: [(0, a.jsxs)("div", {
        className: d.qrcodeContent,
        children: [(0, a.jsx)("div", {
          className: d.qrcodeCard,
          children: (0, a.jsx)(x, {
            text: "".concat(p, "?user_code=").concat(encodeURIComponent(n))
          })
        }), (0, a.jsxs)("div", {
          className: d.qrcodeText,
          children: [(0, a.jsx)(o.X6q, {
            variant: "heading-xxl/semibold",
            color: "header-primary",
            className: d.qrcodeTextHeading,
            children: c.intl.string(c.t.llDCiY)
          }), (0, a.jsx)(o.X6q, {
            variant: "heading-xxl/normal",
            color: "header-secondary",
            children: c.intl.string(c.t.JfHzXF)
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: d.dividerContent,
        children: [(0, a.jsx)("div", {
          className: d.divider
        }), (0, a.jsx)(o.X6q, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          className: d.dividerText,
          children: c.intl.string(c.t.arEHn5)
        }), (0, a.jsx)("div", {
          className: d.divider
        })]
      }), (0, a.jsxs)("div", {
        className: d.fallbackContent,
        children: [(0, a.jsxs)("div", {
          className: d.fallbackContentTextGroup,
          children: [(0, a.jsx)(o.X6q, {
            variant: "heading-xxl/semibold",
            color: "header-primary",
            className: d.fallbackContentHeading,
            children: c.intl.string(c.t.Eu8rJy)
          }), (0, a.jsx)(o.X6q, {
            variant: "heading-xxl/normal",
            color: "header-secondary",
            children: c.intl.string(c.t.BkEMJy)
          })]
        }), (0, a.jsxs)("div", {
          className: d.fallbackContentAction,
          children: [(0, a.jsx)(o.X6q, {
            variant: "heading-xxl/semibold",
            color: "header-primary",
            className: d.fallbackContentHeading,
            children: h
          }), (0, a.jsxs)("div", {
            className: d.fallbackContentTextGroup,
            children: [(0, a.jsx)(o.X6q, {
              variant: "heading-xxl/normal",
              color: "header-secondary",
              children: c.intl.string(c.t.RyDxBQ)
            }), (0, a.jsx)(o.X6q, {
              variant: "heading-xxl/bold",
              color: "header-primary",
              className: d.fallbackContentCode,
              children: null == (t = n.match(/.{1,4}/g)) ? true : t.join(" ")
            })]
          })]
        })]
      }), (0, a.jsx)("img", {
        className: d.wumpus,
        src: u,
        alt: ""
      })]
    })]
  })
}