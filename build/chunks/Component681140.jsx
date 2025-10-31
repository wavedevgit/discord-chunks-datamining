/** Chunk was on 3020 **/
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
  Chunk530146 = require("./530146.js");
let g = (0, Chunk972959.H)(() => ({
  userId: null,
  state: null,
  loading: false,
  error: null
}));

function f(e) {
  let {
    title: t,
    guildIds: n
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: x.detailsRow,
      children: (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: t
      })
    }), (0, a.jsxs)("div", {
      className: x.nestedDetailsList,
      children: [0 === n.length && (0, a.jsx)("div", {
        className: x.detailsRow,
        children: (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: "None"
        })
      }), n.map(e => {
        let t = m.Z.getGuild(e);
        return null == t ? null : (0, a.jsxs)("div", {
          className: x.detailsRow,
          children: [(0, a.jsx)(c.ZP, {
            guild: t,
            iconSize: 16
          }), (0, a.jsx)(l.Text, {
            variant: "text-sm/normal",
            children: t.name
          })]
        }, e)
      })]
    })]
  })
}

function b(e) {
  var t;
  let {
    userState: n
  } = e, {
    user: r,
    searchWorkerUser: s,
    guildMembers: d,
    guildMemberRequests: g
  } = n, b = i.useCallback(e => {
    let {
      ok: t
    } = e;
    return t ? (0, a.jsx)(l.owK, {
      size: "sm",
      color: l.TVs.colors.STATUS_POSITIVE
    }) : (0, a.jsx)(l.Mgn, {
      size: "sm",
      color: l.TVs.colors.STATUS_DANGER
    })
  }, []);
  return (0, a.jsxs)("div", {
    className: x.detailsList,
    children: [(0, a.jsxs)("div", {
      className: x.detailsRow,
      children: [b({
        ok: null != r
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: null != r ? "User exists in UserStore" : "User does not exist in UserStore"
      })]
    }), null != r && (0, a.jsx)("div", {
      className: x.nestedDetailsList,
      children: (0, a.jsx)("div", {
        className: x.detailsRow,
        children: (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: "username: ".concat(r.username)
        })
      })
    }), (0, a.jsxs)("div", {
      className: x.detailsRow,
      children: [b({
        ok: null != s
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: null != s ? "User exists in User Search Worker" : "User does not exist in User Search Worker"
      })]
    }), null != s && (0, a.jsxs)("div", {
      className: x.nestedDetailsList,
      children: [(0, a.jsx)("div", {
        className: x.detailsRow,
        children: (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: "username: ".concat(s.username)
        })
      }), (0, a.jsx)("div", {
        className: x.detailsRow,
        children: (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: "global name: ".concat(null != (t = s.globalName) ? t : "—")
        })
      }), (0, a.jsx)("div", {
        className: x.detailsRow,
        children: (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: "nicknames:"
        })
      }), (0, a.jsxs)("div", {
        className: x.nestedDetailsList,
        children: [0 === Object.keys(s.nicknames).length && (0, a.jsx)("div", {
          className: x.detailsRow,
          children: (0, a.jsx)(l.Text, {
            variant: "text-sm/normal",
            children: "None"
          })
        }), Object.entries(s.nicknames).map(e => {
          let [t, n] = e, i = m.Z.getGuild(t), r = u.Z.getChannel(t);
          return (0, a.jsxs)("div", {
            className: x.detailsRow,
            children: [null != i && (0, a.jsx)(c.ZP, {
              guild: i,
              iconSize: 16
            }), null != i && (0, a.jsx)(l.Text, {
              variant: "text-sm/normal",
              children: i.name
            }), null == i && null != r && (0, a.jsx)(l.Text, {
              variant: "text-sm/normal",
              children: (0, o.F6)(r, h.default, p.Z)
            }), (0, a.jsx)(l.Text, {
              variant: "text-sm/normal",
              children: " (".concat(t, ")")
            }), null != n && "" !== n && (0, a.jsx)(l.Text, {
              variant: "text-sm/normal",
              children: " - ".concat(n)
            })]
          }, t)
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: x.detailsRow,
      children: [b({
        ok: d.length > 0
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: d.length > 0 ? "Guild members exist:" : "No guild members exist"
      })]
    }), d.length > 0 && (0, a.jsx)("div", {
      className: x.nestedDetailsList,
      children: d.map(e => {
        var t;
        let n = m.Z.getGuild(e.guildId);
        if (null == n) return null;
        let i = null != (t = e.nick) ? t : "";
        return (0, a.jsxs)("div", {
          className: x.detailsRow,
          children: [(0, a.jsx)(c.ZP, {
            guild: n,
            iconSize: 16
          }), (0, a.jsxs)(l.Text, {
            variant: "text-sm/normal",
            children: [n.name, "" !== i ? " - ".concat(i) : ""]
          })]
        }, "".concat(e.guildId))
      })
    }), (0, a.jsxs)("div", {
      className: x.detailsRow,
      children: [(0, a.jsx)(l.d3s, {
        size: "sm"
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: "GuildMemberRequesterStore State"
      })]
    }), null != g && (0, a.jsxs)("div", {
      className: x.nestedDetailsList,
      children: [(0, a.jsx)(f, {
        title: "Pending Guild Member Requests:",
        guildIds: g.pendingRequestGuildIds
      }), (0, a.jsx)(f, {
        title: "Sent Guild Member Requests:",
        guildIds: g.sentRequestGuildIds
      }), (0, a.jsx)(f, {
        title: "Unacknowledged Guild Member Requests:",
        guildIds: g.unacknowledgedRequestGuildIds
      })]
    })]
  })
}

function v() {
  let e = Chunk647438.useCallback(e => {
      g.setState({
        userId: e,
        state: null
      })
    }, []),
    t = Chunk647438.useCallback(async () => {
      let {
        userId: e,
        loading: t
      } = g.getState();
      if (!exports && null != module) {
        g.setState({
          loading: true,
          error: null
        });
        try {
          let t = await (0, Chunk620481.V_)(module);
          g.setState({
            state: exports,
            loading: false
          })
        } catch (t) {
          let e = new Chunk881052.Hx(exports);
          g.setState({
            error: module.getAnyErrorMessage(),
            loading: false
          })
        } finally {
          g.setState({
            loading: false
          })
        }
      }
    }, []),
    n = g.useField("loading");
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk530146.inputWithButtonRow,
    children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
      placeholder: "User ID",
      onChange: module
    }), (0, Chunk951288.jsx)(Chunk481060.Button, {
      onClick: exports,
      text: "Get Snapshot",
      loading: require,
      disabled: require
    })]
  })
}

function j() {
  let e = g.useField("state"),
    t = g.useField("error");
  return (0, Chunk951288.jsxs)(Chunk481060.C3N, {
    label: "Debug User State",
    description: "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
    children: [(0, Chunk951288.jsx)(v, {}), null != exports && (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      className: Chunk530146.statusText,
      children: exports
    }), null != module && (0, Chunk951288.jsx)(b, {
      userState: module
    })]
  })
}