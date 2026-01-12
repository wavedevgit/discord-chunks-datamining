/** Chunk was on 9536 **/
/** chunk id: 353398, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Q5: () => T,
  Sf: () => _,
  ZP: () => w
}), require("./781311.js"), require("./953529.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk484614 = require("./484614.jsx"),
  Chunk881052 = require("./881052.js"),
  Chunk751189 = require("./751189.js"),
  Chunk409059 = require("./409059.js"),
  Chunk518936 = require("./518936.js"),
  Chunk999382 = require("./999382.js"),
  Chunk260539 = require("./260539.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk865062 = require("./865062.js"),
  Chunk478411 = require("./478411.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class S extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(O.Z, j.Z)
  }
  getTemplate() {
    let e = O.Z.getProps().guild;
    if (null == e) return null;
    let t = j.Z.getForGuild(e.id);
    return null != t && t.state !== y.Rj.RESOLVING ? t : null
  }
  showNotice() {
    let e = this.getTemplate();
    return null != e && null != this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description)
  }
  constructor(...e) {
    super(...e), I(this, "name", ""), I(this, "description", ""), I(this, "error", null), I(this, "reset", () => {
      let e = this.getTemplate();
      if (null != e) {
        var t, n;
        this.name = null != (t = e.name) ? t : this.name, this.description = null != (n = e.description) ? n : this.description
      } else this.name = "", this.description = "";
      this.emitChange()
    }), I(this, "setName", e => {
      this.name = e, this.emitChange()
    }), I(this, "setDescription", e => {
      this.description = e, this.emitChange()
    }), I(this, "setError", e => {
      this.error = e, this.emitChange()
    }), I(this, "save", async () => {
      await x.Z.updateGuildTemplate(O.Z.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange()
    })
  }
}
I(S, "displayName", "GuildSettingsTemplateMetadataStore_");
let _ = new S(Chunk570140.Z);

function T() {
  let [e, t] = l.useState(false), n = async () => {
    t(true), await _.save(), t(false)
  };
  return (0, i.jsx)(g.Z, {
    submitting: e,
    onReset: _.reset,
    onSave: n,
    disabled: !P(_.name)
  })
}

function P(e) {
  return null != e && e.trim().length >= 2
}

function w() {
  return (0, i.jsx)("div", {
    className: E.marginBottom4,
    children: (0, i.jsxs)(m.y5t, {
      component: (0, i.jsx)(m.Heading, {
        variant: "heading-lg/semibold",
        children: C.intl.string(C.t.KUw7Ss)
      }),
      children: [(0, i.jsx)(m.Text, {
        className: E.marginBottom20,
        variant: "text-sm/normal",
        children: C.intl.format(C.t.c0m8bK, {})
      }), (0, i.jsx)(R, {}), (0, i.jsx)(m.izJ, {
        className: N.divider
      }), (0, i.jsx)(Z, {})]
    })
  })
}

function Z() {
  let {
    guild: e
  } = O.Z.getProps();
  c()(null != e, "guild cannot be null");
  let t = (0, d.e7)([_], () => _.error),
    [n, r] = l.useState(true),
    {
      loading: a,
      guildTemplate: s
    } = function(e) {
      let [t, n] = l.useState(true);
      return l.useEffect(() => {
        !async function() {
          n(true);
          try {
            await x.Z.loadTemplatesForGuild(e), n(false)
          } catch (e) {
            _.setError(new h.Hx(e))
          }
        }()
      }, [e]), {
        loading: t,
        guildTemplate: (0, d.e7)([j.Z], () => j.Z.getForGuild(e), [e])
      }
    }(e.id);
  if (l.useEffect(() => {
      if (n && !a) {
        if (null != s) {
          var e, t;
          _.setName(null != (e = s.name) ? e : ""), _.setDescription(null != (t = s.description) ? t : "")
        }
        r(false)
      }
    }, [n, s, a]), l.useEffect(() => () => {
      _.reset(), _.setError(null)
    }, []), n) return null != t ? (0, i.jsx)(m.Text, {
    color: "text-feedback-critical",
    variant: "text-sm/normal",
    children: t.message
  }) : (0, i.jsx)(m.$jN, {
    className: E.marginTop40
  });
  let o = null != t && null == t.getFirstFieldErrorMessage("name") && null == t.getFirstFieldErrorMessage("description");
  return (0, i.jsxs)(m.Kqy, {
    gap: 20,
    children: [(0, i.jsx)(A, {}), (0, i.jsx)(L, {
      guild: e,
      guildTemplate: s
    }), o ? (0, i.jsx)(m.Text, {
      className: E.marginTop8,
      color: "text-feedback-critical",
      variant: "text-sm/normal",
      children: t.getAnyErrorMessage()
    }) : null]
  })
}

function R() {
  return (0, i.jsxs)("div", {
    className: N.descriptionBox,
    children: [(0, i.jsxs)("div", {
      className: N.descriptionSection,
      children: [(0, i.jsx)(m.Heading, {
        variant: "eyebrow",
        children: C.intl.string(C.t["f8u+VO"])
      }), (0, i.jsxs)("div", {
        className: N.descriptionRow,
        children: [(0, i.jsx)(m.owK, {
          size: "md",
          className: N.descriptionIcon,
          color: u.Z.unsafe_rawColors.GREEN_360.css,
          secondaryColor: u.Z.unsafe_rawColors.WHITE.css
        }), C.intl.string(C.t.K2tn16)]
      }), (0, i.jsxs)("div", {
        className: N.descriptionRow,
        children: [(0, i.jsx)(m.owK, {
          size: "md",
          className: N.descriptionIcon,
          color: u.Z.unsafe_rawColors.GREEN_360.css,
          secondaryColor: u.Z.unsafe_rawColors.WHITE.css
        }), C.intl.string(C.t.om5gNq)]
      }), (0, i.jsxs)("div", {
        className: N.descriptionRow,
        children: [(0, i.jsx)(m.owK, {
          size: "md",
          className: N.descriptionIcon,
          color: u.Z.unsafe_rawColors.GREEN_360.css,
          secondaryColor: u.Z.unsafe_rawColors.WHITE.css
        }), C.intl.string(C.t["/VNqdD"])]
      })]
    }), (0, i.jsxs)("div", {
      className: N.descriptionSection,
      children: [(0, i.jsx)(m.Heading, {
        variant: "eyebrow",
        children: C.intl.string(C.t["8zhJEr"])
      }), (0, i.jsxs)("div", {
        className: N.descriptionRow,
        children: [(0, i.jsx)(m.k$p, {
          size: "md",
          className: N.descriptionIcon,
          color: u.Z.unsafe_rawColors.RED_400.css,
          secondaryColor: u.Z.unsafe_rawColors.WHITE.css
        }), C.intl.string(C.t.WOKI6t)]
      }), (0, i.jsxs)("div", {
        className: N.descriptionRow,
        children: [(0, i.jsx)(m.k$p, {
          size: "md",
          className: N.descriptionIcon,
          color: u.Z.unsafe_rawColors.RED_400.css,
          secondaryColor: u.Z.unsafe_rawColors.WHITE.css
        }), C.intl.string(C.t.ddhDJH)]
      }), (0, i.jsxs)("div", {
        className: N.descriptionRow,
        children: [(0, i.jsx)(m.k$p, {
          size: "md",
          className: N.descriptionIcon,
          color: u.Z.unsafe_rawColors.RED_400.css,
          secondaryColor: u.Z.unsafe_rawColors.WHITE.css
        }), C.intl.string(C.t["6Q/DHk"])]
      })]
    })]
  })
}

function D(e) {
  let {
    cancel: t,
    confirm: n
  } = e;
  return (0, i.jsx)(m.SR, {
    dismissable: true,
    header: C.intl.string(C.t["cN/RFD"]),
    confirmText: C.intl.string(C.t["cN/RFD"]),
    cancelText: C.intl.string(C.t["ETE/oC"]),
    onCancel: t,
    onConfirm: n,
    children: (0, i.jsx)(m.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: C.intl.string(C.t["apCQv/"])
    })
  })
}

function A() {
  let e = (0, d.e7)([_], () => _.name),
    t = (0, d.e7)([_], () => _.description),
    n = (0, d.e7)([_], () => _.error),
    [r, a] = l.useState(false),
    s = l.useCallback(() => {
      a(false)
    }, []),
    o = l.useCallback(() => {
      a(true)
    }, []),
    c = l.useMemo(() => {
      if (!(r || e.length < 1 || P(e))) return C.intl.string(C.t.IHAlh1)
    }, [e, r]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(m.oil, {
      label: C.intl.string(C.t.z1a9R1),
      required: true,
      error: null != c ? c : null == n ? true : n.getFirstFieldErrorMessage("name"),
      value: e,
      onChange: e => _.setName(e),
      placeholder: C.intl.string(C.t.bMlpvk),
      maxLength: 100,
      onBlur: s,
      onFocus: o,
      autoFocus: true
    }), (0, i.jsx)(m.Kx8, {
      label: C.intl.string(C.t.GxirWa),
      error: null == n ? true : n.getFirstFieldErrorMessage("description"),
      value: t,
      onChange: e => _.setDescription(e),
      placeholder: C.intl.string(C.t.n1FBXh),
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
    children: [(0, i.jsx)(m.gNt, {
      label: C.intl.string(C.t.zGGcLw),
      children: (0, i.jsx)(p.Z, {
        buttonLook: f.zx.Looks.FILLED,
        buttonColor: f.zx.Colors.BRAND,
        value: (0, v.Z)(n.code)
      })
    }), n.isDirty && (0, i.jsx)(m.Text, {
      color: "text-feedback-warning",
      className: E.marginTop8,
      variant: "text-sm/normal",
      children: C.intl.string(C.t.aWsjtD)
    }), (0, i.jsxs)("div", {
      className: s()(E.marginTop20, N.buttonContainer),
      children: [n.isDirty && (0, i.jsx)(G, {
        guild: t,
        guildTemplate: n
      }), (0, i.jsxs)("div", {
        className: N.rightButtonContainer,
        children: [(0, i.jsx)(M, {
          guild: t,
          guildTemplate: n
        }), (0, i.jsx)(U, {
          guildTemplate: n
        })]
      })]
    }), n.isDirty && (0, i.jsx)("div", {
      className: N.lastSync,
      children: C.intl.format(C.t.v0AVum, {
        timestamp: new Date(n.updatedAt)
      })
    })]
  })
}

function k(e) {
  let {
    guild: t
  } = e, n = (0, d.e7)([_], () => _.name), [r, a] = l.useState(false), s = async () => {
    _.setError(null), a(true);
    try {
      await x.Z.createGuildTemplate(t.id, _.name, _.description)
    } catch (e) {
      _.setError(new h.Hx(e))
    }
    a(false)
  };
  return (0, i.jsx)(m.Button, {
    variant: "primary",
    text: C.intl.string(C.t.Wxdi8A),
    loading: r,
    disabled: !P(n),
    onClick: s
  })
}

function G(e) {
  let {
    guild: t,
    guildTemplate: n
  } = e, [r, a] = l.useState(false), s = async () => {
    _.setError(null), a(true);
    try {
      await x.Z.syncGuildTemplate(t.id, n.code)
    } catch (e) {
      _.setError(new h.Hx(e))
    }
    a(false)
  };
  return (0, i.jsx)("div", {
    "data-button-hoisted-classname-wrapper": true,
    className: N.button,
    children: (0, i.jsx)(m.Button, {
      variant: "primary",
      text: C.intl.string(C.t["Nw+0Y/"]),
      loading: r,
      onClick: s
    })
  })
}

function M(e) {
  let {
    guild: t,
    guildTemplate: n
  } = e, [r, a] = l.useState(false), s = async () => {
    _.setError(null);
    try {
      await x.Z.deleteGuildTemplate(t.id, n.code), _.setName(""), _.setDescription("")
    } catch (e) {
      _.setError(new h.Hx(e))
    }
    a(false)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: N.button,
      children: (0, i.jsx)(m.Button, {
        variant: "critical-secondary",
        text: C.intl.string(C.t["cN/RFD"]),
        onClick: () => a(true)
      })
    }), r ? (0, i.jsx)(D, {
      confirm: s,
      cancel: () => a(false)
    }) : null]
  })
}

function U(e) {
  let {
    guildTemplate: t
  } = e;
  return (0, i.jsx)("div", {
    "data-button-hoisted-classname-wrapper": true,
    className: N.button,
    children: (0, i.jsx)(m.Button, {
      variant: "secondary",
      text: C.intl.string(C.t.YI3iV6),
      onClick: () => (0, m.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("10778"), n.e("93099")]).then(n.bind(n, 766775));
        return n => {
          var r, l;
          return (0, i.jsx)(e, (r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                I(e, t, n[t])
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