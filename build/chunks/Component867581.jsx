/** Chunk was on 92241 **/
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
  Chunk391972 = require("./391972.js"),
  Chunk216019 = require("./216019.js"),
  Chunk286359 = require("./286359.js");
let T = "hTKzmak",
  O = (r = window.GLOBAL_ENV.INVITE_HOST, o = "", null == r && (r = location.host, o = Chunk981631.Z5c.INVITE("")), "".concat(location.protocol, "//").concat(r).concat(o, "/")),
  S = [T, "".concat(O).concat(T), "".concat(O).concat("wumpus-friends")],
  E = e => {
    let {
      onClick: t
    } = e;
    return (0, a.jsxs)(c.P3F, {
      className: b.rowContainer,
      onClick: () => {
        t(), (0, f.uL)(m.Z5c.GUILD_DISCOVERY)
      },
      children: [(0, a.jsx)("img", {
        width: 40,
        height: 40,
        className: b.rowIcon,
        alt: "",
        src: N
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.Heading, {
          className: b.rowText,
          variant: "heading-md/semibold",
          children: _.intl.string(_.t.DwDxDU)
        }), (0, a.jsx)(c.Text, {
          className: b.rowText,
          variant: "text-xs/normal",
          children: _.intl.string(_.t["5RL4CD"])
        })]
      }), (0, a.jsx)("img", {
        className: b.rowArrow,
        alt: "",
        src: I
      })]
    })
  };

function g(e) {
  let {
    onBack: t,
    onClose: n,
    isSlideReady: r
  } = e, [o, f] = i.useState(""), [m, I] = i.useState(false), [N, g] = i.useState(null), C = i.useRef(null);
  i.useEffect(() => {
    var e;
    r && (null == (e = C.current) || e.focus())
  }, [r]);
  let h = e => {
    e.preventDefault();
    let t = o.trim();
    if ("" === t) return void g(_.intl.string(_.t.IRq5ah));
    g(null), I(true);
    let r = t.split("/"),
      a = r[r.length - 1];
    s.ZP.resolveInvite(a, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (I(false), null == t) return void g(_.intl.string(_.t["GEYI+Z"]));
      if (null != t.channel) {
        let e = s.ZP.getInviteContext("Join Guild", t);
        s.ZP.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            n(), s.ZP.transitionToInvite(e)
          }
        }).then(() => {}, e => {
          e instanceof u.yZ || e instanceof u.Hx ? g((0, p.O)(e.code)) : g(_.intl.string(_.t.dDZRdy))
        })
      }
    }, e => {
      I(false);
      let t = new u.yZ(e);
      g((0, p.O)(t.code))
    })
  };
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)(c.xBx, {
      "data-migration-pending": true,
      className: b.header,
      direction: d.Z.Direction.VERTICAL,
      separator: false,
      children: [(0, a.jsx)(c.Heading, {
        className: b.title,
        variant: "heading-xl/semibold",
        children: _.intl.string(_.t.riOUtB)
      }), (0, a.jsx)(c.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: _.intl.string(_.t["7jub2t"])
      }), (0, a.jsx)(c.olH, {
        "data-migration-pending": true,
        className: b.closeButton,
        onClick: n
      })]
    }), (0, a.jsxs)(c.hzk, {
      "data-migration-pending": true,
      className: b.__invalid_content,
      children: [(0, a.jsx)("form", {
        onSubmit: h,
        className: b.inputForm,
        children: (0, a.jsx)(c.oil, {
          label: _.intl.string(_.t.qreV25),
          required: true,
          error: N,
          value: o,
          onChange: f,
          placeholder: "".concat(O).concat(T),
          inputRef: C
        })
      }), (0, a.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: _.intl.string(_.t.Bnq46H)
      }), (0, a.jsx)("div", {
        className: b.sampleLinks,
        children: S.map(e => (0, a.jsx)(c.P3F, {
          className: b.sampleLink,
          onClick: () => f(e),
          children: e
        }, e))
      }), (0, a.jsx)(E, {
        onClick: n
      })]
    }), (0, a.jsxs)(c.mzw, {
      "data-migration-pending": true,
      className: b.footer,
      children: [(0, a.jsx)(c.Button, {
        variant: "primary",
        text: _.intl.string(_.t["Ts/9Ac"]),
        loading: m,
        onClick: h
      }), (0, a.jsx)(l.zx, {
        "data-migration-pending": true,
        color: l.zx.Colors.PRIMARY,
        look: l.zx.Looks.LINK,
        size: l.zx.Sizes.MIN,
        onClick: t,
        children: _.intl.string(_.t["13/7kX"])
      })]
    })]
  })
}