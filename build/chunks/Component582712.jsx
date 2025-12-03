/** Chunk was on 35489 **/
/** chunk id: 582712, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk286379 = require("./286379.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk797614 = require("./797614.js"),
  Chunk769654 = require("./769654.js"),
  Chunk695346 = require("./695346.js"),
  Chunk430824 = require("./430824.js"),
  Chunk88658 = require("./88658.js"),
  Chunk401416 = require("./401416.js"),
  Chunk920133 = require("./920133.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk956051 = require("./956051.js"),
  Chunk444812 = require("./444812.js");

function y(e) {
  let {
    transitionState: t,
    guildId: y,
    onClose: O
  } = e, D = (0, s.e7)([m.Z], () => m.Z.getGuild(y));
  return (a.useEffect(() => {
    (0, x.Y)(y), (0, g.L)(g.Q.MODAL_VIEWED, y), d.Z.increment({
      name: i.V.DM_SETTINGS_UPSELL_VIEW
    })
  }, [y]), null == D) ? null : (0, r.jsx)(o.Y0X, {
    transitionState: t,
    className: h.modal,
    parentComponent: "DmSettingsUpsellModal",
    children: (0, r.jsxs)("form", {
      onSubmit: e => {
        e.preventDefault();
        let t = (0, f.YK)();
        t.add(y), b.h2.updateSetting(Array.from(t)).then(() => (0, o.showToast)((0, o.createToast)(p.intl.string(p.t.rlYD1W), o.ToastType.SUCCESS))), O(), (0, g.L)(g.Q.MODAL_DISABLED_DMS, y)
      },
      children: [(0, r.jsx)("img", {
        alt: "",
        className: h.headerImage,
        src: j
      }), (0, r.jsxs)(o.xBx, {
        separator: false,
        className: h.header,
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-lg/bold",
          className: h.title,
          children: p.intl.string(p.t.w2BvnL)
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-default",
          className: h.body,
          children: p.intl.format(p.t.Depjkv, {
            guild_name: D.name
          })
        })]
      }), (0, r.jsxs)(o.hzk, {
        children: [(0, r.jsx)(o.Text, {
          variant: "eyebrow",
          color: "text-default",
          className: h.subtitle,
          children: p.intl.string(p.t.KPB2iw)
        }), (0, r.jsx)("div", {
          className: h.guildContainer,
          children: (0, r.jsxs)("div", {
            className: h.guildInfo,
            children: [(0, r.jsx)(c.Z, {
              guild: D,
              size: c.Z.Sizes.SMALL
            }), (0, r.jsx)(o.Text, {
              className: h.guildName,
              variant: "text-md/semibold",
              children: D.name
            })]
          })
        }), (0, r.jsxs)("div", {
          className: h.content,
          children: [(0, r.jsx)(l.zx, {
            className: h.button,
            type: "submit",
            color: l.zx.Colors.BRAND,
            size: l.zx.Sizes.MEDIUM,
            children: p.intl.string(p.t.TD7iUx)
          }), (0, r.jsx)(l.zx, {
            className: h.button,
            color: l.zx.Colors.PRIMARY,
            onClick: () => {
              O(), (0, g.L)(g.Q.MODAL_DISMISSED, y)
            },
            children: p.intl.string(p.t.PsWbcp)
          }), (0, r.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            className: h.footer,
            children: p.intl.format(p.t.IzZxXW, {
              onClick: () => {
                O(), (0, u.X)(y), (0, o.ZDy)(async () => {
                  let {
                    default: e
                  } = await n.e("86722").then(n.bind(n, 264333));
                  return t => {
                    var n, a;
                    return (0, r.jsx)(e, (n = function(e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                          return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                          var r;
                          r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: true,
                            configurable: true,
                            writable: true
                          }) : e[t] = r
                        })
                      }
                      return e
                    }({}, t), a = a = {
                      guild: D
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                      }
                      return n
                    })(Object(a)).forEach(function(e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
                    }), n))
                  }
                }), (0, g.L)(g.Q.MODAL_GUILD_SETTINGS_CLICKED, y)
              }
            })
          })]
        })]
      })]
    })
  })
}