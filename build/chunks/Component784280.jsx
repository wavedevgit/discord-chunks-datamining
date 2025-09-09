/** Chunk was on 53900 **/
/** chunk id: 784280, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk607070 = require("./607070.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk781792 = require("./781792.js"),
  Chunk430824 = require("./430824.js"),
  Chunk645792 = require("./645792.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk687212 = require("./687212.js");

function _(e) {
  let {
    guildId: a
  } = e, t = (0, o.e7)([f.Z], () => f.Z.getGuild(a)), [_, p] = r.useState(null), [C, H] = r.useState(""), {
    createMultipleConfettiAt: N
  } = r.useContext(c.h), k = (0, o.e7)([d.Z], () => d.Z.useReducedMotion, []), v = async a => {
    let {
      onClose: t,
      guildId: n
    } = e;
    a.preventDefault(), p(null);
    try {
      await (0, u.e)(n, {
        nick: C
      }), null == t || t()
    } catch (e) {
      p(new s.Hx(e))
    }
  }, {
    transitionState: S
  } = e, j = f.Z.getGuildsArray().filter(e => e.id !== a && e.features.has(h.oNc.HUB)).length > 0, w = !k && !j && (null == t ? true : t.features.has(h.oNc.HUB)) && (0, b.b)();
  return r.useEffect(() => {
    w && N(window.innerWidth / 2, window.innerHeight / 2)
  }, [N, w]), (0, n.jsxs)(l.Y0X, {
    className: g.__invalid_modalRoot,
    transitionState: S,
    "aria-label": x.intl.formatToPlainString(x.t["d+6kzs"], {
      guildName: null == t ? true : t.name
    }),
    parentComponent: "HubRealNameModal",
    children: [(0, n.jsxs)(l.xBx, {
      separator: false,
      className: g.formHeaderContainer,
      direction: m.Z.Direction.VERTICAL,
      children: [(0, n.jsx)("div", {
        className: g.formImage
      }), (0, n.jsx)(l.X6q, {
        variant: "heading-xl/semibold",
        className: g.formHeader,
        children: x.intl.format(x.t["d+6kzs"], {
          guildName: null == t ? true : t.name
        })
      }), (0, n.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        className: g.formSubHeader,
        children: x.intl.string(x.t.b3L8y8)
      })]
    }), (0, n.jsxs)("form", {
      className: g.formContent,
      onSubmit: v,
      children: [(0, n.jsx)(l.hzk, {
        children: (0, n.jsx)(l.oil, {
          label: x.intl.string(x.t.ilDlmZ),
          placeholder: x.intl.string(x.t.RfWvWF),
          onChange: e => {
            H(e)
          },
          error: null == _ ? true : _.getFirstFieldErrorMessage("name"),
          value: C
        })
      }), (0, n.jsx)(l.mzw, {
        className: g.formFooter,
        direction: m.Z.Direction.VERTICAL,
        children: (0, n.jsx)(i.zx, {
          type: "submit",
          size: i.zx.Sizes.LARGE,
          color: i.zx.Colors.BRAND,
          children: x.intl.string(x.t.Np4yXV)
        })
      })]
    })]
  })
}