/** Chunk was on 24209 **/
/** chunk id: 867581, original params: e,t,n (module,exports,require) **/
let r, o;
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./781311.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk881052 = require("./881052.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk703656 = require("./703656.js"),
  Chunk782605 = require("./782605.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk604509 = require("./604509.js"),
  Chunk216019 = require("./216019.js"),
  Chunk286359 = require("./286359.js");
let E = "hTKzmak",
  C = (0, Chunk313201.hQ)(),
  x = (r = window.GLOBAL_ENV.INVITE_HOST, o = "", null == r && (r = location.host, o = Chunk981631.Z5c.INVITE("")), "".concat(location.protocol, "//").concat(r).concat(o, "/")),
  h = [E, "".concat(x).concat(E), "".concat(x).concat("wumpus-friends")],
  g = e => {
    let {
      onClick: t
    } = e;
    return (0, l.jsxs)(u.P3F, {
      className: b.rowContainer,
      onClick: () => {
        t(), (0, f.uL)(N.Z5c.GUILD_DISCOVERY)
      },
      children: [(0, l.jsx)("img", {
        width: 40,
        height: 40,
        className: b.rowIcon,
        alt: "",
        src: O
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsx)(u.X6q, {
          className: b.rowText,
          variant: "heading-md/semibold",
          children: T.intl.string(T.t.DwDxDQ)
        }), (0, l.jsx)(u.Text, {
          className: b.rowText,
          variant: "text-xs/normal",
          children: T.intl.string(T.t["5RL4CA"])
        })]
      }), (0, l.jsx)("img", {
        className: b.rowArrow,
        alt: "",
        src: S
      })]
    })
  };

function w(e) {
  let {
    onBack: t,
    onClose: n,
    isSlideReady: r
  } = e, [o, a] = i.useState(""), [p, f] = i.useState(false), [N, S] = i.useState(null), O = i.useRef(null);
  i.useEffect(() => {
    var e;
    r && (null == (e = O.current) || e.focus())
  }, [r]);
  let w = e => {
    e.preventDefault();
    let t = o.trim();
    if ("" === t) return void S(T.intl.string(T.t.IRq5am));
    S(null), f(true);
    let r = t.split("/"),
      l = r[r.length - 1];
    _.ZP.resolveInvite(l, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (f(false), null == t) return void S(T.intl.string(T.t["GEYI+f"]));
      if (null != t.channel) {
        let e = _.ZP.getInviteContext("Join Guild", t);
        _.ZP.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            n(), _.ZP.transitionToInvite(e)
          }
        }).then(() => {}, e => {
          e instanceof d.yZ || e instanceof d.Hx ? S((0, I.O)(e.code)) : S(T.intl.string(T.t.dDZRd3))
        })
      }
    }, e => {
      f(false);
      let t = new d.yZ(e);
      S((0, I.O)(t.code))
    })
  };
  return (0, l.jsxs)("div", {
    children: [(0, l.jsxs)(u.xBx, {
      className: b.header,
      direction: m.Z.Direction.VERTICAL,
      separator: false,
      children: [(0, l.jsx)(u.X6q, {
        className: b.title,
        variant: "heading-xl/semibold",
        children: T.intl.string(T.t.riOUtL)
      }), (0, l.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: T.intl.string(T.t["7jub2t"])
      }), (0, l.jsx)(u.olH, {
        className: b.closeButton,
        onClick: n
      })]
    }), (0, l.jsxs)(u.hzk, {
      className: b.__invalid_content,
      children: [(0, l.jsx)("form", {
        onSubmit: w,
        className: b.inputForm,
        children: (0, l.jsxs)(u.xJW, {
          children: [(0, l.jsx)(u.vwX, {
            id: C,
            error: N,
            className: s()(b.formTitle, {
              [b.error]: null != N
            }),
            required: true,
            children: T.intl.string(T.t.qreV29)
          }), (0, l.jsx)(u.oil, {
            value: o,
            onChange: a,
            placeholder: "".concat(x).concat(E),
            inputRef: O,
            required: true,
            "aria-labelledby": C
          })]
        })
      }), (0, l.jsx)(u.xJW, {
        title: T.intl.string(T.t.Bnq46O),
        titleClassName: b.formTitle,
        className: b.examplesForm,
        children: h.map(e => (0, l.jsx)(u.P3F, {
          className: b.sampleLink,
          onClick: () => a(e),
          children: e
        }, e))
      }), (0, l.jsx)(g, {
        onClick: n
      })]
    }), (0, l.jsxs)(u.mzw, {
      className: b.footer,
      children: [(0, l.jsx)(u.zxk, {
        variant: "primary",
        text: T.intl.string(T.t["Ts/9AQ"]),
        loading: p,
        onClick: w
      }), (0, l.jsx)(c.zx, {
        color: c.zx.Colors.PRIMARY,
        look: c.zx.Looks.LINK,
        size: c.zx.Sizes.MIN,
        onClick: t,
        children: T.intl.string(T.t["13/7kZ"])
      })]
    })]
  })
}