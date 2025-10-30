/** Chunk was on 35489 **/
/** chunk id: 582712, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk382716 = require("./382716.js"),
  Chunk444812 = require("./444812.js");

function y(e) {
  let {
    transitionState: t,
    guildId: y,
    onClose: O
  } = e, D = (0, i.e7)([m.Z], () => m.Z.getGuild(y));
  return (a.useEffect(() => {
    (0, h.Y)(y), (0, p.L)(p.Q.MODAL_VIEWED, y), d.Z.increment({
      name: s.V.DM_SETTINGS_UPSELL_VIEW
    })
  }, [y]), null == D) ? null : (0, n.jsx)(l.Y0X, {
    transitionState: t,
    className: x.modal,
    parentComponent: "DmSettingsUpsellModal",
    children: (0, n.jsxs)("form", {
      onSubmit: e => {
        e.preventDefault();
        let t = (0, g.YK)();
        t.add(y), b.h2.updateSetting(Array.from(t)).then(() => (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.rlYD1W), l.ToastType.SUCCESS))), O(), (0, p.L)(p.Q.MODAL_DISABLED_DMS, y)
      },
      children: [(0, n.jsx)("img", {
        alt: "",
        className: x.headerImage,
        src: j
      }), (0, n.jsxs)(l.xBx, {
        separator: false,
        className: x.header,
        children: [(0, n.jsx)(l.Heading, {
          variant: "heading-lg/bold",
          className: x.title,
          children: f.intl.string(f.t.w2BvnL)
        }), (0, n.jsx)(l.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: x.body,
          children: f.intl.format(f.t.Depjkv, {
            guild_name: D.name
          })
        })]
      }), (0, n.jsxs)(l.hzk, {
        children: [(0, n.jsx)(l.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          className: x.subtitle,
          children: f.intl.string(f.t.KPB2iw)
        }), (0, n.jsx)("div", {
          className: x.guildContainer,
          children: (0, n.jsxs)("div", {
            className: x.guildInfo,
            children: [(0, n.jsx)(c.Z, {
              guild: D,
              size: c.Z.Sizes.SMALL
            }), (0, n.jsx)(l.Text, {
              className: x.guildName,
              variant: "text-md/semibold",
              children: D.name
            })]
          })
        }), (0, n.jsxs)("div", {
          className: x.content,
          children: [(0, n.jsx)(o.zx, {
            className: x.button,
            type: "submit",
            color: o.zx.Colors.BRAND,
            size: o.zx.Sizes.MEDIUM,
            children: f.intl.string(f.t.TD7iUx)
          }), (0, n.jsx)(o.zx, {
            className: x.button,
            color: o.zx.Colors.PRIMARY,
            onClick: () => {
              O(), (0, p.L)(p.Q.MODAL_DISMISSED, y)
            },
            children: f.intl.string(f.t.PsWbcp)
          }), (0, n.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: x.footer,
            children: f.intl.format(f.t.IzZxXW, {
              onClick: () => {
                O(), (0, u.X)(y), (0, l.ZDy)(async () => {
                  let {
                    default: e
                  } = await r.e("59500").then(r.bind(r, 241420));
                  return t => {
                    var r, a;
                    return (0, n.jsx)(e, (r = function(e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                          n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                          return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))), n.forEach(function(t) {
                          var n;
                          n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: true,
                            configurable: true,
                            writable: true
                          }) : e[t] = n
                        })
                      }
                      return e
                    }({}, t), a = a = {
                      guild: D
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                      }
                      return r
                    })(Object(a)).forEach(function(e) {
                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                    }), r))
                  }
                }), (0, p.L)(p.Q.MODAL_GUILD_SETTINGS_CLICKED, y)
              }
            })
          })]
        })]
      })]
    })
  })
}