/** Chunk was on 8345 **/
/** chunk id: 681140, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk972959 = require("./972959.js"),
  Chunk933557 = require("./933557.js"),
  Chunk305347 = require("./305347.jsx"),
  Chunk620481 = require("./620481.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk575043 = require("./575043.js");
let f = (0, Chunk972959.H)(() => ({
  userId: null,
  state: null,
  loading: false,
  error: null
}));

function b(e) {
  let {
    title: t,
    guildIds: n
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: x.detailsRow,
      children: (0, a.jsx)(i.R94, {
        children: t
      })
    }), (0, a.jsxs)("div", {
      className: x.nestedDetailsList,
      children: [0 === n.length && (0, a.jsx)("div", {
        className: x.detailsRow,
        children: (0, a.jsx)(i.R94, {
          children: "None"
        })
      }), n.map(e => {
        let t = m.Z.getGuild(e);
        return null == t ? null : (0, a.jsxs)("div", {
          className: x.detailsRow,
          children: [(0, a.jsx)(c.ZP, {
            guild: t,
            iconSize: 16
          }), (0, a.jsx)(i.R94, {
            children: t.name
          })]
        }, e)
      })]
    })]
  })
}

function g(e) {
  var t;
  let {
    userState: n
  } = e, {
    user: l,
    searchWorkerUser: s,
    guildMembers: d,
    guildMemberRequests: f
  } = n, g = r.useCallback(e => {
    let {
      ok: t
    } = e;
    return t ? (0, a.jsx)(i.owK, {
      size: "sm",
      color: i.TVs.colors.STATUS_POSITIVE
    }) : (0, a.jsx)(i.Mgn, {
      size: "sm",
      color: i.TVs.colors.STATUS_DANGER
    })
  }, []);
  return (0, a.jsxs)("div", {
    className: x.detailsList,
    children: [(0, a.jsxs)("div", {
      className: x.detailsRow,
      children: [g({
        ok: null != l
      }), (0, a.jsx)(i.R94, {
        children: null != l ? "User exists in UserStore" : "User does not exist in UserStore"
      })]
    }), null != l && (0, a.jsx)("div", {
      className: x.nestedDetailsList,
      children: (0, a.jsx)("div", {
        className: x.detailsRow,
        children: (0, a.jsx)(i.R94, {
          children: "username: ".concat(l.username)
        })
      })
    }), (0, a.jsxs)("div", {
      className: x.detailsRow,
      children: [g({
        ok: null != s
      }), (0, a.jsx)(i.R94, {
        children: null != s ? "User exists in User Search Worker" : "User does not exist in User Search Worker"
      })]
    }), null != s && (0, a.jsxs)("div", {
      className: x.nestedDetailsList,
      children: [(0, a.jsx)("div", {
        className: x.detailsRow,
        children: (0, a.jsx)(i.R94, {
          children: "username: ".concat(s.username)
        })
      }), (0, a.jsx)("div", {
        className: x.detailsRow,
        children: (0, a.jsx)(i.R94, {
          children: "global name: ".concat(null != (t = s.globalName) ? t : "—")
        })
      }), (0, a.jsx)("div", {
        className: x.detailsRow,
        children: (0, a.jsx)(i.R94, {
          children: "nicknames:"
        })
      }), (0, a.jsxs)("div", {
        className: x.nestedDetailsList,
        children: [0 === Object.keys(s.nicknames).length && (0, a.jsx)("div", {
          className: x.detailsRow,
          children: (0, a.jsx)(i.R94, {
            children: "None"
          })
        }), Object.entries(s.nicknames).map(e => {
          let [t, n] = e, r = m.Z.getGuild(t), l = u.Z.getChannel(t);
          return (0, a.jsxs)("div", {
            className: x.detailsRow,
            children: [null != r && (0, a.jsx)(c.ZP, {
              guild: r,
              iconSize: 16
            }), null != r && (0, a.jsx)(i.R94, {
              children: r.name
            }), null == r && null != l && (0, a.jsx)(i.R94, {
              children: (0, o.F6)(l, h.default, p.Z)
            }), (0, a.jsx)(i.R94, {
              children: " (".concat(t, ")")
            }), null != n && "" !== n && (0, a.jsx)(i.R94, {
              children: " - ".concat(n)
            })]
          }, t)
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: x.detailsRow,
      children: [g({
        ok: d.length > 0
      }), (0, a.jsx)(i.R94, {
        children: d.length > 0 ? "Guild members exist:" : "No guild members exist"
      })]
    }), d.length > 0 && (0, a.jsx)("div", {
      className: x.nestedDetailsList,
      children: d.map(e => {
        var t;
        let n = m.Z.getGuild(e.guildId);
        if (null == n) return null;
        let r = null != (t = e.nick) ? t : "";
        return (0, a.jsxs)("div", {
          className: x.detailsRow,
          children: [(0, a.jsx)(c.ZP, {
            guild: n,
            iconSize: 16
          }), (0, a.jsxs)(i.R94, {
            children: [n.name, "" !== r ? " - ".concat(r) : ""]
          })]
        }, "".concat(e.guildId))
      })
    }), (0, a.jsxs)("div", {
      className: x.detailsRow,
      children: [(0, a.jsx)(i.d3s, {
        size: "sm"
      }), (0, a.jsx)(i.R94, {
        children: "GuildMemberRequesterStore State"
      })]
    }), null != f && (0, a.jsxs)("div", {
      className: x.nestedDetailsList,
      children: [(0, a.jsx)(b, {
        title: "Pending Guild Member Requests:",
        guildIds: f.pendingRequestGuildIds
      }), (0, a.jsx)(b, {
        title: "Sent Guild Member Requests:",
        guildIds: f.sentRequestGuildIds
      }), (0, a.jsx)(b, {
        title: "Unacknowledged Guild Member Requests:",
        guildIds: f.unacknowledgedRequestGuildIds
      })]
    })]
  })
}

function v() {
  let e = Chunk647438.useCallback(e => {
      f.setState({
        userId: e,
        state: null
      })
    }, []),
    t = Chunk647438.useCallback(async () => {
      let {
        userId: e,
        loading: t
      } = f.getState();
      if (!exports && null != module) {
        f.setState({
          loading: true,
          error: null
        });
        try {
          let t = await (0, Chunk620481.V_)(module);
          f.setState({
            state: exports,
            loading: false
          })
        } catch (t) {
          let e = new Chunk881052.Hx(exports);
          f.setState({
            error: module.getAnyErrorMessage(),
            loading: false
          })
        } finally {
          f.setState({
            loading: false
          })
        }
      }
    }, []),
    n = f.useField("loading");
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk575043.inputWithButtonRow,
    children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
      placeholder: "User ID",
      onChange: module
    }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
      onClick: exports,
      text: "Get Snapshot",
      loading: require,
      disabled: require
    })]
  })
}

function j() {
  let e = f.useField("state"),
    t = f.useField("error");
  return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    title: "Debug User State",
    tag: Chunk481060.RB0.H3,
    className: Chunk575043.panelGroup,
    children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.geA.DESCRIPTION,
      className: Chunk575043.subtitle,
      children: "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs."
    }), (0, Chunk951288.jsx)(v, {}), null != exports && (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      className: Chunk575043.statusText,
      children: exports
    }), null != module && (0, Chunk951288.jsx)(g, {
      userState: module
    })]
  })
}