/** Chunk was on 24209 **/
/** chunk id: 867581, original params: e,t,n (module,exports,require) **/
let r, o;
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./781311.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk881052 = require("./881052.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk782605 = require("./782605.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk604509 = require("./604509.js"),
  Chunk216019 = require("./216019.js"),
  Chunk286359 = require("./286359.js");
let O = "hTKzmak",
  S = (r = window.GLOBAL_ENV.INVITE_HOST, o = "", null == r && (r = location.host, o = Chunk981631.Z5c.INVITE("")), "".concat(location.protocol, "//").concat(r).concat(o, "/")),
  b = [O, "".concat(S).concat(O), "".concat(S).concat("wumpus-friends")],
  E = e => {
    let {
      onClick: t
    } = e;
    return (0, i.jsxs)(s.P3F, {
      className: I.rowContainer,
      onClick: () => {
        t(), (0, d.uL)(m.Z5c.GUILD_DISCOVERY)
      },
      children: [(0, i.jsx)("img", {
        width: 40,
        height: 40,
        className: I.rowIcon,
        alt: "",
        src: T
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(s.Heading, {
          className: I.rowText,
          variant: "heading-md/semibold",
          children: f.intl.string(f.t.DwDxDU)
        }), (0, i.jsx)(s.Text, {
          className: I.rowText,
          variant: "text-xs/normal",
          children: f.intl.string(f.t["5RL4CD"])
        })]
      }), (0, i.jsx)("img", {
        className: I.rowArrow,
        alt: "",
        src: N
      })]
    })
  };

function g(e) {
  let {
    onBack: t,
    onClose: n,
    isSlideReady: r
  } = e, [o, d] = l.useState(""), [m, N] = l.useState(false), [T, g] = l.useState(null), C = l.useRef(null);
  l.useEffect(() => {
    var e;
    r && (null == (e = C.current) || e.focus())
  }, [r]);
  let h = e => {
    e.preventDefault();
    let t = o.trim();
    if ("" === t) return void g(f.intl.string(f.t.IRq5ah));
    g(null), N(true);
    let r = t.split("/"),
      i = r[r.length - 1];
    c.ZP.resolveInvite(i, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (N(false), null == t) return void g(f.intl.string(f.t["GEYI+Z"]));
      if (null != t.channel) {
        let e = c.ZP.getInviteContext("Join Guild", t);
        c.ZP.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            n(), c.ZP.transitionToInvite(e)
          }
        }).then(() => {}, e => {
          e instanceof u.yZ || e instanceof u.Hx ? g((0, p.O)(e.code)) : g(f.intl.string(f.t.dDZRdy))
        })
      }
    }, e => {
      N(false);
      let t = new u.yZ(e);
      g((0, p.O)(t.code))
    })
  };
  return (0, i.jsxs)("div", {
    children: [(0, i.jsxs)(s.xBx, {
      "data-migration-pending": true,
      className: I.header,
      direction: _.Z.Direction.VERTICAL,
      separator: false,
      children: [(0, i.jsx)(s.Heading, {
        className: I.title,
        variant: "heading-xl/semibold",
        children: f.intl.string(f.t.riOUtB)
      }), (0, i.jsx)(s.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: f.intl.string(f.t["7jub2t"])
      }), (0, i.jsx)(s.olH, {
        "data-migration-pending": true,
        className: I.closeButton,
        onClick: n
      })]
    }), (0, i.jsxs)(s.hzk, {
      "data-migration-pending": true,
      className: I.__invalid_content,
      children: [(0, i.jsx)("form", {
        onSubmit: h,
        className: I.inputForm,
        children: (0, i.jsx)(s.oil, {
          label: f.intl.string(f.t.qreV25),
          required: true,
          error: T,
          value: o,
          onChange: d,
          placeholder: "".concat(S).concat(O),
          inputRef: C
        })
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: f.intl.string(f.t.Bnq46H)
      }), (0, i.jsx)("div", {
        className: I.sampleLinks,
        children: b.map(e => (0, i.jsx)(s.P3F, {
          className: I.sampleLink,
          onClick: () => d(e),
          children: e
        }, e))
      }), (0, i.jsx)(E, {
        onClick: n
      })]
    }), (0, i.jsxs)(s.mzw, {
      "data-migration-pending": true,
      className: I.footer,
      children: [(0, i.jsx)(s.Button, {
        variant: "primary",
        text: f.intl.string(f.t["Ts/9Ac"]),
        loading: m,
        onClick: h
      }), (0, i.jsx)(a.zx, {
        "data-migration-pending": true,
        color: a.zx.Colors.PRIMARY,
        look: a.zx.Looks.LINK,
        size: a.zx.Sizes.MIN,
        onClick: t,
        children: f.intl.string(f.t["13/7kX"])
      })]
    })]
  })
}