/** Chunk was on web.js **/
/** chunk id: 830168, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./415506.js"), require("./49124.js");
var Chunk570140 = require("./570140.js"),
  Chunk330516 = require("./330516.js"),
  Chunk710845 = require("./710845.js"),
  Chunk594174 = require("./594174.js"),
  Chunk436181 = require("./436181.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk186901 = require("./186901.js");
let m = new Chunk710845.Z("NativeDispatchUtils");

function h() {
  return null != r ? Promise.resolve(r) : (0, Chunk358085.isDesktop)() ? Promise.all([Chunk998502.ZP.ensureModule("discord_dispatch"), Chunk998502.ZP.ensureModule("discord_modules")]).then(() => {
    Chunk998502.ZP.requireModule("discord_modules");
    let e = Chunk998502.ZP.getDispatch();
    return null != module ? (r = module, module) : Promise.reject(Error("dispatch not found"))
  }) : Promise.reject(Error("not desktop client"))
}

function g() {
  return null == i && m.warn("Tried getting Dispatch instance before instantiated"), i
}

function E(e) {
  let t = JSON.parse(e);
  return m.log("Native Dispatch error", t), new o.Z(t)
}

function b(e, t) {
  "" !== e && E(e)
}

function y(e) {
  let {
    properties: t
  } = e;
  switch (null != t.stage && null != t.stage.type && (t.stage = t.stage.type), e.event_name) {
    case p.rMx.DISPATCH_PATCH_STARTED:
    case p.rMx.DISPATCH_PATCH_PAUSED:
    case p.rMx.DISPATCH_PATCH_FAILED:
    case p.rMx.DISPATCH_PATCH_VERIFICATION_FAILED:
    case p.rMx.DISPATCH_PATCH_COMPLETE:
    case p.rMx.DISPATCH_PATCH_CANCELLED:
    case p.rMx.DISPATCH_APPLICATION_UNINSTALLED:
      u.default.track(e.event_name, t)
  }
}
let O = {
  init(e) {
    let {
      userToken: t,
      userId: n,
      installPaths: r,
      platform: a,
      stateCallback: o,
      errorCallback: s
    } = e;
    null == i && h().then(e => {
      let c = {
          environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
          build_number: "482483"
        },
        u = l.default.getCurrentUser();
      null != u && (c.user_id = u.id, c.user_name = u.tag, null != u.email && (c.email = u.email));
      let d = {
        user_token: t,
        user_id: n,
        install_paths: r.map(e => {
          let {
            path: t
          } = e;
          return t
        }),
        api_endpoint: "".concat("https:").concat(window.GLOBAL_ENV.API_ENDPOINT),
        environment: window.GLOBAL_ENV.PROJECT_ENV,
        sentry: c,
        platform: a
      };
      i = new e.Dispatch(JSON.stringify(d), e => {
        let t = JSON.parse(e);
        o({
          applications: t.applications,
          paused: t.paused,
          currentTask: null != t.current_task ? {
            applicationId: t.current_task.application_id,
            branchId: t.current_task.branch_id
          } : null,
          nextTask: null != t.next_task ? {
            applicationId: t.next_task.application_id,
            branchId: t.next_task.branch_id
          } : null
        })
      }, e => {
        s(E(e))
      }, e => {
        y(JSON.parse(e))
      })
    })
  },
  destroy() {
    let e = g();
    null != module && true !== module.destroy && (module.destroy(), i = null)
  },
  setTargetManifest(e) {
    let {
      applicationId: t,
      applicationName: n,
      applicationIcon: r,
      branchId: i,
      buildId: a,
      manifestIds: o,
      installationPath: s
    } = e, l = g();
    null != l && l.command(JSON.stringify({
      command: "SetTargetManifest",
      application_id: t,
      application_name: n,
      application_icon: r,
      branch_id: i,
      build_id: a,
      manifest_ids: o,
      install_path: s
    }), b)
  },
  setCurrentTask(e, t, n, r, i) {
    let a = g();
    return null != a && (a.command(JSON.stringify({
      command: "SetCurrentTask",
      application_id: e,
      branch_id: t,
      action: n,
      user_id: r,
      user_token: i
    }), b), true)
  },
  setCredentials(e, t) {
    let n = g();
    null != n && n.command(JSON.stringify({
      command: "SetCredentials",
      user_id: e,
      user_token: t
    }), b)
  },
  cancel(e, t) {
    let n = g();
    null != n && n.command(JSON.stringify({
      command: "Cancel",
      application_id: e,
      branch_id: t
    }), b)
  },
  uninstall(e, t) {
    let n = g();
    null != n && n.command(JSON.stringify({
      command: "Uninstall",
      application_id: e,
      branch_id: t
    }), b)
  },
  pause() {
    let e = g();
    null != module && module.command(JSON.stringify({
      command: "Pause"
    }), b)
  },
  resume() {
    let e = g();
    null != module && module.command(JSON.stringify({
      command: "Resume"
    }), b)
  },
  queryDirectory(e, t) {
    let n = g();
    null != n && n.command(JSON.stringify({
      command: "QueryDirectory",
      path: e
    }), (e, n) => {
      if ("" !== e) t(JSON.parse(e));
      else if (null != n) {
        let e = JSON.parse(n);
        t(null, {
          hasPermission: e.has_permission,
          availableKB: parseInt(e.available_kb),
          totalKB: parseInt(e.total_kb)
        })
      }
    })
  },
  runLaunchSetup: (e, t) => c.Z.isRunning() ? Promise.reject(Error("Already running launch setup.")) : (a.Z.dispatch({
    type: "DISPATCH_APPLICATION_LAUNCH_SETUP_START"
  }), new Promise((n, r) => {
    let i = g();
    if (null == i) return void r(Error("native dispatch instance not found"));
    i.command(JSON.stringify({
      command: "RunLaunchSetup",
      application_id: e,
      branch_id: t
    }), (e, t, i) => {
      if ("" !== e) {
        a.Z.dispatch({
          type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE"
        });
        let t = E(e);
        a.Z.dispatch({
          type: "DISPATCH_APPLICATION_ERROR",
          error: t
        }), null != t.code && t.code === _.ff.POST_INSTALL_CANCELLED ? r(t) : n();
        return
      }
      if ("" !== t) {
        a.Z.dispatch({
          type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE"
        }), n();
        return
      }
      if ("" !== i) {
        let e = JSON.parse(i);
        a.Z.dispatch({
          type: "DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE",
          progress: e.progress,
          total: e.total,
          name: e.name
        })
      }
    })
  })),
  launch: (e, t, n, r) => new Promise((i, a) => {
    let o = g();
    if (null == o) return void a(Error("native dispatch instance not found"));

    function s(e, t) {
      "" !== e ? a(E(e)) : i([JSON.parse(t).pid])
    }
    o.command(JSON.stringify({
      command: "Launch",
      application_id: e,
      branch_id: t,
      option_name: n,
      environment: r
    }), s)
  })
}