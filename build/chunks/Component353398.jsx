/** Chunk was on 64982 **/
/** chunk id: 353398, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Q5: () => T,
  Sf: () => S,
  ZP: () => w
}), require("./781311.js"), require("./953529.js"), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk484614 = require("./484614.jsx"),
  Chunk852860 = require("./852860.jsx"),
  Chunk881052 = require("./881052.js"),
  Chunk751189 = require("./751189.js"),
  Chunk409059 = require("./409059.js"),
  Chunk518936 = require("./518936.js"),
  Chunk999382 = require("./999382.js"),
  Chunk260539 = require("./260539.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk86477 = require("./86477.js"),
  Chunk197571 = require("./197571.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class I extends(r = Chunk442837.ZP.Store) {
  getTemplate() {
    let e = Chunk999382.Z.getProps().guild;
    if (null == module) return null;
    let t = Chunk409059.Z.getForGuild(module.id);
    return null != exports && exports.state !== Chunk260539.Rj.RESOLVING ? exports : null
  }
  showNotice() {
    let e = this.getTemplate();
    return null != module && null != this.name && (this.name.trim() !== module.name || this.description.trim() !== module.description)
  }
  constructor(...e) {
    super(...e), E(this, "name", ""), E(this, "description", ""), E(this, "error", null), E(this, "reset", () => {
      let e = this.getTemplate();
      if (null != e) {
        var t, n;
        this.name = null != (t = e.name) ? t : this.name, this.description = null != (n = e.description) ? n : this.description
      } else this.name = "", this.description = "";
      this.emitChange()
    }), E(this, "setName", e => {
      this.name = e, this.emitChange()
    }), E(this, "setDescription", e => {
      this.description = e, this.emitChange()
    }), E(this, "setError", e => {
      this.error = e, this.emitChange()
    }), E(this, "save", async () => {
      await b.Z.updateGuildTemplate(v.Z.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange()
    })
  }
}
E(I, "displayName", "GuildSettingsTemplateMetadataStore_");
let S = new I(Chunk570140.Z);

function T() {
  let [e, t] = Chunk647438.useState(false), n = async () => {
    exports(true), await S.save(), exports(false)
  };
  return (0, Chunk951288.jsx)(Chunk852860.Z, {
    submitting: module,
    onReset: S.reset,
    onSave: require,
    disabled: !P(S.name)
  })
}

function P(e) {
  return null != e && e.trim().length >= 2
}

function w() {
  return (0, Chunk951288.jsx)(Chunk481060.hjN, {
    className: Chunk197571.marginBottom4,
    children: (0, Chunk951288.jsxs)(Chunk481060.y5t, {
      component: (0, Chunk951288.jsx)(Chunk481060.vwX, {
        tag: Chunk481060.RB0.H1,
        children: Chunk388032.intl.string(Chunk388032.t.KUw7Sk)
      }),
      children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
        className: Chunk197571.marginBottom20,
        type: Chunk481060.geA.DESCRIPTION,
        children: Chunk388032.intl.format(Chunk388032.t.c0m8bG, {})
      }), (0, Chunk951288.jsx)(Z, {}), (0, Chunk951288.jsx)(Chunk481060.izJ, {
        className: Chunk86477.divider
      }), (0, Chunk951288.jsx)(R, {})]
    })
  })
}

function R() {
  let {
    guild: e
  } = Chunk999382.Z.getProps();
  c()(null != module, "guild cannot be null");
  let t = (0, Chunk442837.e7)([S], () => S.error),
    [n, r] = Chunk647438.useState(true),
    {
      loading: s,
      guildTemplate: a
    } = function(e) {
      let [t, n] = l.useState(true);
      return l.useEffect(() => {
        !async function() {
          n(true);
          try {
            await b.Z.loadTemplatesForGuild(e), n(false)
          } catch (e) {
            S.setError(new x.Hx(e))
          }
        }()
      }, [e]), {
        loading: t,
        guildTemplate: (0, d.e7)([j.Z], () => j.Z.getForGuild(e), [e])
      }
    }(module.id);
  if (Chunk647438.useEffect(() => {
      if (require && !Chunk120356) {
        if (null != a) {
          var e, t;
          S.setName(null != (e = a.name) ? module : ""), S.setDescription(null != (t = a.description) ? exports : "")
        }
        r(false)
      }
    }, [require, a, Chunk120356]), Chunk647438.useEffect(() => () => {
      S.reset(), S.setError(null)
    }, []), require) return null != exports ? (0, Chunk951288.jsx)(Chunk481060.Text, {
    color: "text-danger",
    variant: "text-sm/normal",
    children: exports.message
  }) : (0, Chunk951288.jsx)(Chunk481060.$jN, {
    className: Chunk197571.marginTop40
  });
  let o = null != exports && null == exports.getFirstFieldErrorMessage("name") && null == exports.getFirstFieldErrorMessage("description");
  return (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
    gap: 20,
    children: [(0, Chunk951288.jsx)(A, {}), (0, Chunk951288.jsx)(L, {
      guild: module,
      guildTemplate: a
    }), Chunk512722 ? (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk197571.marginTop8,
      color: "text-danger",
      variant: "text-sm/normal",
      children: exports.getAnyErrorMessage()
    }) : null]
  })
}

function Z() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk86477.descriptionBox,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk86477.descriptionSection,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "eyebrow",
        children: Chunk388032.intl.string(Chunk388032.t["f8u+VF"])
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk86477.descriptionRow,
        children: [(0, Chunk951288.jsx)(Chunk481060.owK, {
          size: "md",
          className: Chunk86477.descriptionIcon,
          color: Chunk692547.Z.unsafe_rawColors.GREEN_360.css,
          secondaryColor: Chunk692547.Z.unsafe_rawColors.WHITE_500.css
        }), Chunk388032.intl.string(Chunk388032.t.K2tn19)]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk86477.descriptionRow,
        children: [(0, Chunk951288.jsx)(Chunk481060.owK, {
          size: "md",
          className: Chunk86477.descriptionIcon,
          color: Chunk692547.Z.unsafe_rawColors.GREEN_360.css,
          secondaryColor: Chunk692547.Z.unsafe_rawColors.WHITE_500.css
        }), Chunk388032.intl.string(Chunk388032.t.om5gNj)]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk86477.descriptionRow,
        children: [(0, Chunk951288.jsx)(Chunk481060.owK, {
          size: "md",
          className: Chunk86477.descriptionIcon,
          color: Chunk692547.Z.unsafe_rawColors.GREEN_360.css,
          secondaryColor: Chunk692547.Z.unsafe_rawColors.WHITE_500.css
        }), Chunk388032.intl.string(Chunk388032.t["/VNqdH"])]
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk86477.descriptionSection,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "eyebrow",
        children: Chunk388032.intl.string(Chunk388032.t["8zhJEh"])
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk86477.descriptionRow,
        children: [(0, Chunk951288.jsx)(Chunk481060.k$p, {
          size: "md",
          className: Chunk86477.descriptionIcon,
          color: Chunk692547.Z.unsafe_rawColors.RED_400.css,
          secondaryColor: Chunk692547.Z.unsafe_rawColors.WHITE_500.css
        }), Chunk388032.intl.string(Chunk388032.t.WOKI6u)]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk86477.descriptionRow,
        children: [(0, Chunk951288.jsx)(Chunk481060.k$p, {
          size: "md",
          className: Chunk86477.descriptionIcon,
          color: Chunk692547.Z.unsafe_rawColors.RED_400.css,
          secondaryColor: Chunk692547.Z.unsafe_rawColors.WHITE_500.css
        }), Chunk388032.intl.string(Chunk388032.t.ddhDJC)]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk86477.descriptionRow,
        children: [(0, Chunk951288.jsx)(Chunk481060.k$p, {
          size: "md",
          className: Chunk86477.descriptionIcon,
          color: Chunk692547.Z.unsafe_rawColors.RED_400.css,
          secondaryColor: Chunk692547.Z.unsafe_rawColors.WHITE_500.css
        }), Chunk388032.intl.string(Chunk388032.t["6Q/DHh"])]
      })]
    })]
  })
}

function D(e) {
  let {
    cancel: t,
    confirm: n
  } = e;
  return (0, i.jsx)(m.sYh, {
    dismissable: true,
    header: O.intl.string(O.t["cN/RFB"]),
    confirmText: O.intl.string(O.t["cN/RFB"]),
    cancelText: O.intl.string(O.t["ETE/oK"]),
    onCancel: t,
    onConfirm: n,
    children: (0, i.jsx)(m.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: O.intl.string(O.t.apCQv7)
    })
  })
}

function A() {
  let e = (0, Chunk442837.e7)([S], () => S.name),
    t = (0, Chunk442837.e7)([S], () => S.description),
    n = (0, Chunk442837.e7)([S], () => S.error),
    [r, s] = Chunk647438.useState(false),
    a = Chunk647438.useCallback(() => {
      Chunk120356(false)
    }, []),
    o = Chunk647438.useCallback(() => {
      Chunk120356(true)
    }, []),
    c = Chunk647438.useMemo(() => {
      if (!(r || module.length < 1 || P(module))) return Chunk388032.intl.string(Chunk388032.t.IHAlh4)
    }, [module, r]);
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
      label: Chunk388032.intl.string(Chunk388032.t.z1a9R0),
      required: true,
      error: null != c ? c : null == require ? true : require.getFirstFieldErrorMessage("name"),
      value: module,
      onChange: e => S.setName(e),
      placeholder: Chunk388032.intl.string(Chunk388032.t.bMlpvr),
      maxLength: 100,
      onBlur: a,
      onFocus: Chunk512722,
      autoFocus: true
    }), (0, Chunk951288.jsx)(Chunk481060.Kx8, {
      label: Chunk388032.intl.string(Chunk388032.t.GxirWV),
      error: null == require ? true : require.getFirstFieldErrorMessage("description"),
      value: exports,
      onChange: e => S.setDescription(e),
      placeholder: Chunk388032.intl.string(Chunk388032.t.n1FBXl),
      maxLength: 120
    })]
  })
}

function L(e) {
  let {
    guild: t,
    guildTemplate: n
  } = e;
  return null == n ? (0, i.jsx)(k, {
    guild: t
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(m.xJW, {
      title: O.intl.string(O.t.zGGcLy),
      children: (0, i.jsx)(f.Z, {
        buttonLook: g.zx.Looks.FILLED,
        buttonColor: g.zx.Colors.BRAND,
        value: (0, _.Z)(n.code)
      })
    }), n.isDirty && (0, i.jsx)(m.Text, {
      color: "text-feedback-warning",
      className: N.marginTop8,
      variant: "text-sm/normal",
      children: O.intl.string(O.t.aWsjtL)
    }), (0, i.jsxs)("div", {
      className: a()(N.marginTop20, y.buttonContainer),
      children: [n.isDirty && (0, i.jsx)(G, {
        guild: t,
        guildTemplate: n
      }), (0, i.jsxs)("div", {
        className: y.rightButtonContainer,
        children: [(0, i.jsx)(M, {
          guild: t,
          guildTemplate: n
        }), (0, i.jsx)(U, {
          guildTemplate: n
        })]
      })]
    }), n.isDirty && (0, i.jsx)("div", {
      className: y.lastSync,
      children: O.intl.format(O.t.v0AVur, {
        timestamp: new Date(n.updatedAt)
      })
    })]
  })
}

function k(e) {
  let {
    guild: t
  } = e, n = (0, d.e7)([S], () => S.name), [r, s] = l.useState(false), a = async () => {
    S.setError(null), s(true);
    try {
      await b.Z.createGuildTemplate(t.id, S.name, S.description)
    } catch (e) {
      S.setError(new x.Hx(e))
    }
    s(false)
  };
  return (0, i.jsx)(m.zxk, {
    variant: "primary",
    text: O.intl.string(O.t.Wxdi8P),
    loading: r,
    disabled: !P(n),
    onClick: a
  })
}

function G(e) {
  let {
    guild: t,
    guildTemplate: n
  } = e, [r, s] = l.useState(false), a = async () => {
    S.setError(null), s(true);
    try {
      await b.Z.syncGuildTemplate(t.id, n.code)
    } catch (e) {
      S.setError(new x.Hx(e))
    }
    s(false)
  };
  return (0, i.jsx)("div", {
    "data-button-hoisted-classname-wrapper": true,
    className: y.button,
    children: (0, i.jsx)(m.zxk, {
      variant: "primary",
      text: O.intl.string(O.t["Nw+0Y2"]),
      loading: r,
      onClick: a
    })
  })
}

function M(e) {
  let {
    guild: t,
    guildTemplate: n
  } = e, [r, s] = l.useState(false), a = async () => {
    S.setError(null);
    try {
      await b.Z.deleteGuildTemplate(t.id, n.code), S.setName(""), S.setDescription("")
    } catch (e) {
      S.setError(new x.Hx(e))
    }
    s(false)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: y.button,
      children: (0, i.jsx)(m.zxk, {
        variant: "critical-secondary",
        text: O.intl.string(O.t["cN/RFB"]),
        onClick: () => s(true)
      })
    }), r ? (0, i.jsx)(D, {
      confirm: a,
      cancel: () => s(false)
    }) : null]
  })
}

function U(e) {
  let {
    guildTemplate: t
  } = e;
  return (0, i.jsx)("div", {
    "data-button-hoisted-classname-wrapper": true,
    className: y.button,
    children: (0, i.jsx)(m.zxk, {
      variant: "secondary",
      text: O.intl.string(O.t.YI3iV1),
      onClick: () => (0, m.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("10778"), n.e("86015")]).then(n.bind(n, 766775));
        return n => {
          var r, l;
          return (0, i.jsx)(e, (r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                E(e, t, n[t])
              })
            }
            return e
          }({}, n), l = l = {
            guildTemplate: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
          }), r))
        }
      })
    })
  })
}