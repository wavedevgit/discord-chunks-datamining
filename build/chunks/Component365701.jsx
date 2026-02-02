/** Chunk was on 39048 **/
/** chunk id: 365701, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => P,
  Jx: () => I,
  lz: () => C
}), require("./733351.js"), require("./228524.js"), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk416052 = require("./416052.jsx"),
  Chunk198982 = require("./198982.js"),
  Chunk292572 = require("./292572.js"),
  Chunk122906 = require("./122906.js"),
  Chunk539440 = require("./539440.js"),
  Chunk555337 = require("./555337.js"),
  Chunk401755 = require("./401755.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk776433 = require("./776433.js"),
  Chunk473169 = require("./473169.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class S extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(O.A, j.A)
  }
  getTemplate() {
    let e = O.A.getProps().guild;
    if (null == e) return null;
    let t = j.A.getForGuild(e.id);
    return null != t && t.state !== v.QB.RESOLVING ? t : null
  }
  showNotice() {
    let e = this.getTemplate();
    return null != e && null != this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description)
  }
  constructor(...e) {
    super(...e), N(this, "name", ""), N(this, "description", ""), N(this, "error", null), N(this, "reset", () => {
      let e = this.getTemplate();
      if (null != e) {
        var t, n;
        this.name = null != (t = e.name) ? t : this.name, this.description = null != (n = e.description) ? n : this.description
      } else this.name = "", this.description = "";
      this.emitChange()
    }), N(this, "setName", e => {
      this.name = e, this.emitChange()
    }), N(this, "setDescription", e => {
      this.description = e, this.emitChange()
    }), N(this, "setError", e => {
      this.error = e, this.emitChange()
    }), N(this, "save", async () => {
      await x.A.updateGuildTemplate(O.A.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange()
    })
  }
}
N(S, "displayName", "GuildSettingsTemplateMetadataStore_");
let I = new S(Chunk73153.h);

function C() {
  let [e, t] = l.useState(false), n = async () => {
    t(true), await I.save(), t(false)
  };
  return (0, i.jsx)(g.A, {
    submitting: e,
    onReset: I.reset,
    onSave: n,
    disabled: !T(I.name)
  })
}

function T(e) {
  return null != e && e.trim().length >= 2
}

function P() {
  return (0, i.jsx)("div", {
    className: E.Q5,
    children: (0, i.jsxs)(p.Fmo, {
      component: (0, i.jsx)(p.Heading, {
        variant: "heading-lg/semibold",
        children: y.intl.string(y.t.KUw7Ss)
      }),
      children: [(0, i.jsx)(p.Text, {
        className: E.SX,
        variant: "text-sm/normal",
        children: y.intl.format(y.t.c0m8bK, {})
      }), (0, i.jsx)(R, {}), (0, i.jsx)(p.cGx, {
        className: A.yF
      }), (0, i.jsx)(w, {})]
    })
  })
}

function w() {
  let {
    guild: e
  } = O.A.getProps();
  c()(null != e, "guild cannot be null");
  let t = (0, d.bG)([I], () => I.error),
    [n, r] = l.useState(true),
    {
      loading: s,
      guildTemplate: a
    } = function(e) {
      let [t, n] = l.useState(true);
      return l.useEffect(() => {
        !async function() {
          n(true);
          try {
            await x.A.loadTemplatesForGuild(e), n(false)
          } catch (e) {
            I.setError(new b.LG(e))
          }
        }()
      }, [e]), {
        loading: t,
        guildTemplate: (0, d.bG)([j.A], () => j.A.getForGuild(e), [e])
      }
    }(e.id);
  if (l.useEffect(() => {
      if (n && !s) {
        if (null != a) {
          var e, t;
          I.setName(null != (e = a.name) ? e : ""), I.setDescription(null != (t = a.description) ? t : "")
        }
        r(false)
      }
    }, [n, a, s]), l.useEffect(() => () => {
      I.reset(), I.setError(null)
    }, []), n) return null != t ? (0, i.jsx)(p.Text, {
    color: "text-feedback-critical",
    variant: "text-sm/normal",
    children: t.message
  }) : (0, i.jsx)(p.y$y, {
    className: E.eT
  });
  let o = null != t && null == t.getFirstFieldErrorMessage("name") && null == t.getFirstFieldErrorMessage("description");
  return (0, i.jsxs)(p.BJc, {
    gap: 20,
    children: [(0, i.jsx)(G, {}), (0, i.jsx)(L, {
      guild: e,
      guildTemplate: a
    }), o ? (0, i.jsx)(p.Text, {
      className: E.Ot,
      color: "text-feedback-critical",
      variant: "text-sm/normal",
      children: t.getAnyErrorMessage()
    }) : null]
  })
}

function R() {
  return (0, i.jsxs)("div", {
    className: A.qR,
    children: [(0, i.jsxs)("div", {
      className: A.eg,
      children: [(0, i.jsx)(p.Heading, {
        variant: "eyebrow",
        children: y.intl.string(y.t["f8u+VO"])
      }), (0, i.jsxs)("div", {
        className: A.VP,
        children: [(0, i.jsx)(p.yr3, {
          size: "md",
          className: A.Sy,
          color: u.A.unsafe_rawColors.GREEN_360.css,
          secondaryColor: u.A.unsafe_rawColors.WHITE.css
        }), y.intl.string(y.t.K2tn16)]
      }), (0, i.jsxs)("div", {
        className: A.VP,
        children: [(0, i.jsx)(p.yr3, {
          size: "md",
          className: A.Sy,
          color: u.A.unsafe_rawColors.GREEN_360.css,
          secondaryColor: u.A.unsafe_rawColors.WHITE.css
        }), y.intl.string(y.t.om5gNq)]
      }), (0, i.jsxs)("div", {
        className: A.VP,
        children: [(0, i.jsx)(p.yr3, {
          size: "md",
          className: A.Sy,
          color: u.A.unsafe_rawColors.GREEN_360.css,
          secondaryColor: u.A.unsafe_rawColors.WHITE.css
        }), y.intl.string(y.t["/VNqdD"])]
      })]
    }), (0, i.jsxs)("div", {
      className: A.eg,
      children: [(0, i.jsx)(p.Heading, {
        variant: "eyebrow",
        children: y.intl.string(y.t["8zhJEr"])
      }), (0, i.jsxs)("div", {
        className: A.VP,
        children: [(0, i.jsx)(p.aXh, {
          size: "md",
          className: A.Sy,
          color: u.A.unsafe_rawColors.RED_400.css,
          secondaryColor: u.A.unsafe_rawColors.WHITE.css
        }), y.intl.string(y.t.WOKI6t)]
      }), (0, i.jsxs)("div", {
        className: A.VP,
        children: [(0, i.jsx)(p.aXh, {
          size: "md",
          className: A.Sy,
          color: u.A.unsafe_rawColors.RED_400.css,
          secondaryColor: u.A.unsafe_rawColors.WHITE.css
        }), y.intl.string(y.t.ddhDJH)]
      }), (0, i.jsxs)("div", {
        className: A.VP,
        children: [(0, i.jsx)(p.aXh, {
          size: "md",
          className: A.Sy,
          color: u.A.unsafe_rawColors.RED_400.css,
          secondaryColor: u.A.unsafe_rawColors.WHITE.css
        }), y.intl.string(y.t["6Q/DHk"])]
      })]
    })]
  })
}

function D(e) {
  let {
    cancel: t,
    confirm: n
  } = e;
  return (0, i.jsx)(p.MJ3, {
    dismissable: true,
    header: y.intl.string(y.t["cN/RFD"]),
    confirmText: y.intl.string(y.t["cN/RFD"]),
    cancelText: y.intl.string(y.t["ETE/oC"]),
    onCancel: t,
    onConfirm: n,
    children: (0, i.jsx)(p.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: y.intl.string(y.t["apCQv/"])
    })
  })
}

function G() {
  let e = (0, d.bG)([I], () => I.name),
    t = (0, d.bG)([I], () => I.description),
    n = (0, d.bG)([I], () => I.error),
    [r, s] = l.useState(false),
    a = l.useCallback(() => {
      s(false)
    }, []),
    o = l.useCallback(() => {
      s(true)
    }, []),
    c = l.useMemo(() => {
      if (!(r || e.length < 1 || T(e))) return y.intl.string(y.t.IHAlh1)
    }, [e, r]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(p.ksK, {
      label: y.intl.string(y.t.z1a9R1),
      required: true,
      error: null != c ? c : null == n ? true : n.getFirstFieldErrorMessage("name"),
      value: e,
      onChange: e => I.setName(e),
      placeholder: y.intl.string(y.t.bMlpvk),
      maxLength: 100,
      onBlur: a,
      onFocus: o,
      autoFocus: true
    }), (0, i.jsx)(p.fs1, {
      label: y.intl.string(y.t.GxirWa),
      error: null == n ? true : n.getFirstFieldErrorMessage("description"),
      value: t,
      onChange: e => I.setDescription(e),
      placeholder: y.intl.string(y.t.n1FBXh),
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
    children: [(0, i.jsx)(p.D0$, {
      label: y.intl.string(y.t.zGGcLw),
      children: (0, i.jsx)(h.A, {
        buttonLook: m.$n.Looks.FILLED,
        buttonColor: m.$n.Colors.BRAND,
        value: (0, _.A)(n.code)
      })
    }), n.isDirty && (0, i.jsx)(p.Text, {
      color: "text-feedback-warning",
      className: E.Ot,
      variant: "text-sm/normal",
      children: y.intl.string(y.t.aWsjtD)
    }), (0, i.jsxs)("div", {
      className: a()(E.QX, A.UD),
      children: [n.isDirty && (0, i.jsx)(M, {
        guild: t,
        guildTemplate: n
      }), (0, i.jsxs)("div", {
        className: A.eS,
        children: [(0, i.jsx)(U, {
          guild: t,
          guildTemplate: n
        }), (0, i.jsx)(B, {
          guildTemplate: n
        })]
      })]
    }), n.isDirty && (0, i.jsx)("div", {
      className: A.U2,
      children: y.intl.format(y.t.v0AVum, {
        timestamp: new Date(n.updatedAt)
      })
    })]
  })
}

function k(e) {
  let {
    guild: t
  } = e, n = (0, d.bG)([I], () => I.name), [r, s] = l.useState(false), a = async () => {
    I.setError(null), s(true);
    try {
      await x.A.createGuildTemplate(t.id, I.name, I.description)
    } catch (e) {
      I.setError(new b.LG(e))
    }
    s(false)
  };
  return (0, i.jsx)(p.Button, {
    variant: "primary",
    text: y.intl.string(y.t.Wxdi8A),
    loading: r,
    disabled: !T(n),
    onClick: a
  })
}

function M(e) {
  let {
    guild: t,
    guildTemplate: n
  } = e, [r, s] = l.useState(false), a = async () => {
    I.setError(null), s(true);
    try {
      await x.A.syncGuildTemplate(t.id, n.code)
    } catch (e) {
      I.setError(new b.LG(e))
    }
    s(false)
  };
  return (0, i.jsx)("div", {
    "data-button-hoisted-classname-wrapper": true,
    className: A.x6,
    children: (0, i.jsx)(p.Button, {
      variant: "primary",
      text: y.intl.string(y.t["Nw+0Y/"]),
      loading: r,
      onClick: a
    })
  })
}

function U(e) {
  let {
    guild: t,
    guildTemplate: n
  } = e, [r, s] = l.useState(false), a = async () => {
    I.setError(null);
    try {
      await x.A.deleteGuildTemplate(t.id, n.code), I.setName(""), I.setDescription("")
    } catch (e) {
      I.setError(new b.LG(e))
    }
    s(false)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: A.x6,
      children: (0, i.jsx)(p.Button, {
        variant: "critical-secondary",
        text: y.intl.string(y.t["cN/RFD"]),
        onClick: () => s(true)
      })
    }), r ? (0, i.jsx)(D, {
      confirm: a,
      cancel: () => s(false)
    }) : null]
  })
}

function B(e) {
  let {
    guildTemplate: t
  } = e;
  return (0, i.jsx)("div", {
    "data-button-hoisted-classname-wrapper": true,
    className: A.x6,
    children: (0, i.jsx)(p.Button, {
      variant: "secondary",
      text: y.intl.string(y.t.YI3iV6),
      onClick: () => (0, p.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("7726"), n.e("4042")]).then(n.bind(n, 72715));
        return n => {
          var r, l;
          return (0, i.jsx)(e, (r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                N(e, t, n[t])
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