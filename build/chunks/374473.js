/** Chunk was on web.js **/
/** chunk id: 374473, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => D
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk166929 = require("./166929.js"),
  Chunk808180 = require("./808180.js"),
  Chunk973522 = require("./973522.js"),
  Chunk652896 = require("./652896.js"),
  Chunk624694 = require("./624694.js"),
  Chunk929921 = require("./929921.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk873985 = require("./873985.js"),
  Chunk309010 = require("./309010.js"),
  Chunk162605 = require("./162605.js"),
  Chunk851581 = require("./851581.js"),
  Chunk954571 = require("./954571.js"),
  Chunk353835 = require("./353835.js"),
  Chunk321034 = require("./321034.js"),
  Chunk487329 = require("./487329.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");

function I(e) {
  var t;
  let n = c.A.getConnectionStats(e);
  return null == n ? null : null != (t = n.stats.rtp.outbound.find(e => "video" === e.type)) ? t : null
}

function S(e, t) {
  var n;
  if (null == t) return null;
  let r = c.A.getConnectionStats(e);
  if (null == r) return null;
  let i = r.stats.rtp.inbound[t];
  return null == i ? null : null != (n = i.find(e => "video" === e.type)) ? n : null
}

function T(e, t, n) {
  return e ? I(t) : S(t, n)
}

function C(e) {
  var t, n;
  return null != (t = null == (n = c.A.getConnectionStats(e)) ? true : n.stats.transport.outboundBitrateEstimate) ? t : null
}

function N(e) {
  var t, n;
  return null != (t = null == (n = c.A.getConnectionStats(e)) ? true : n.stats.transport.inboundBitrateEstimate) ? t : null
}

function w(e) {
  let t = c.A.getConnectionStats(e),
    n = c.A.getLastConnectionStats(e);
  if (null == t || null == n) return null;
  let r = {};
  for (let e of ["videohookFrames", "hybridDxgiFrames", "hybridGdiFrames", "hybridVideohookFrames", "hybridGraphicsCaptureFrames", "hybridGdiBitBltFrames", "hybridGdiPrintWindowFrames", "quartzFrames", "screenCaptureKitFrames"]) {
    var i, a, s, o;
    let l = null != (i = null == (s = n.stats.screenshare) ? true : s[e]) ? i : 0,
      c = null != (a = null == (o = t.stats.screenshare) ? true : o[e]) ? a : 0;
    r[e] = c - l
  }
  let l = false,
    u = null;
  for (let [e, t] of Object.entries(r)) t > l && (l = t, u = e);
  return l > 0 ? u : null
}

function R(e) {
  var t, n;
  let r = h.A.getVoiceChannelId();
  return null != (t = null != (n = "channelId" in e ? e.channelId : true) ? n : r) ? t : null
}

function P(e, t, n) {
  var r, i, a, s;
  return e ? null != (r = null == (i = I(t)) ? true : i.frameRateEncode) ? r : null : null != (a = null == (s = S(t, n)) ? true : s.frameRateDecode) ? a : null
}

function D(e, t) {
  var n, r, c, h, D;
  let x, L = (0, O.B1)(e),
    j = R(t),
    M = d.A.getChannel(j),
    k = "streamKey" in t ? t.streamKey : true,
    U = "mediaContext" in t ? t.mediaContext : true,
    G = "underlyingError" in t ? t.underlyingError : true,
    V = "errorMessage" in t ? t.errorMessage : true,
    F = "mediaSessionId" in t ? t.mediaSessionId : true,
    B = "rtcConnectionId" in t ? t.rtcConnectionId : true,
    H = "videoCodec" in t ? t.videoCodec : true,
    Y = "videoEncoder" in t ? t.videoEncoder : true,
    W = "videoDecoder" in t ? t.videoDecoder : true,
    K = "audioCaptureSampleRateMismatchPercent" in t ? t.audioCaptureSampleRateMismatchPercent : true,
    z = "audioInputDeviceName" in t ? t.audioInputDeviceName : true,
    q = "audioOutputDeviceName" in t ? t.audioOutputDeviceName : true,
    Z = "videoDeviceName" in t ? t.videoDeviceName : true,
    X = "userId" in t ? t.userId : true,
    Q = null != k ? (0, l.Iy)(k) : null,
    J = null != k ? m.A.getRTCConnection(k) : null,
    $ = null != k ? J : p.A.getRTCConnection(),
    ee = null != k ? null == J || null == (r = J.analyticsContext) ? true : r.streamApplication : null,
    {
      resolution: et,
      fps: en
    } = u.A.getState(),
    {
      gameName: er,
      gameId: ei,
      exe: ea,
      distributor: es
    } = (0, o.wH)(ee),
    eo = L.isErrorOutbound,
    el = null != U ? U : A.x.DEFAULT,
    ec = null != Q ? Q.ownerId : X,
    eu = null != J ? null == J ? true : J.getVoiceParticipantType() : eo ? "sender" : "receiver",
    ed = null != (n = null == $ ? true : $.getMediaEngineConnectionId()) ? n : null;
  x = null != k && null != Q ? eo ? null == $ || null == (c = $.getOutboundStats()) ? true : c.find(e => e.quality === A.Y4) : null == $ ? true : $.getInboundStats(Q.ownerId) : eo ? null != (h = i().maxBy(null != (D = null == $ ? true : $.getOutboundStats()) ? D : [], e => e.num_frames)) ? h : null : null != ec ? null == $ ? true : $.getInboundStats(ec) : null, (0, g.w)().then(t => {
    var n, r, i, o, l, c, u, d, h, m, g, O, R, D, k, X, ee, ef, ep, e_, eh, em, eg, eE, ey, eb, eO, ev, eA, eI, eS, eT, eC, eN, ew, eR, eP, eD, ex, eL, ej, eM, ek, eU, eG, eV, eF, eB, eH;
    let eY = {
      error_name: e.valueOf(),
      error_code: L.errorCode,
      error_severity: L.severity,
      error_category: L.category,
      underlying_error: null != G ? G : null,
      error_message: null != V ? V : null,
      guild_id: null != (n = null == M ? true : M.guild_id) ? n : null,
      channel_id: null != j ? j : null,
      channel_type: null != (r = null == M ? true : M.type) ? r : null,
      rtc_connection_id: null != B ? B : null,
      media_session_id: null != (i = null != F ? F : p.A.getMediaSessionId()) ? i : null,
      parent_media_session_id: null != (o = null == J ? true : J.parentMediaSessionId) ? o : null,
      context: null != U ? U : null,
      voice_backend_version: null != (l = null == (eP = p.A.getRTCConnection()) ? true : eP.getVoiceVersion()) ? l : null,
      rtc_worker_backend_version: null != (c = null == (eD = p.A.getRTCConnection()) ? true : eD.getRtcWorkerVersion()) ? c : null,
      guild_region: null != (u = _.A.getRegion(p.A.getHostname())) ? u : null,
      hostname: null != (d = p.A.getHostname()) ? d : null,
      duration: null != (h = null == $ ? true : $.getDurationSeconds()) ? h : null,
      participant_type: null != eu ? eu : null,
      num_frames: null != (m = null == x ? true : x.num_frames) ? m : 0,
      num_packets: null != (g = null == x ? true : x.num_packets) ? g : 0,
      num_bytes: null != (O = null == x ? true : x.num_bytes) ? O : 0,
      num_packets_lost: null != (R = null == (ex = T(eo, ed, ec)) ? true : ex.packetsLost) ? R : 0,
      video_codec: null != (D = null != H ? H : (0, a.aV)(null == (eL = T(eo, ed, ec)) ? true : eL.codec.name)) ? D : null,
      video_encoder: null != (k = null != Y ? Y : (0, a.kZ)(null == (ej = I(ed)) ? true : ej.encoderImplementationName)) ? k : null,
      video_decoder: null != (X = null != W ? W : (0, a.s7)(null == (eM = S(ed, ec)) ? true : eM.decoderImplementationName)) ? X : null,
      audio_capture_sample_rate_mismatch_percent: null != K ? K : null,
      incoming_video_stopped_for_occlusion: !s.X.isIncomingVideoEnabled(),
      bitrate: null != (ee = null == (ek = T(eo, ed, ec)) ? true : ek.bitrate) ? ee : null,
      target_bitrate: eo && null != (ef = null == (eU = I(ed)) ? true : eU.bitrateTarget) ? ef : null,
      fps: null != (ep = P(eo, el, ec)) ? ep : null,
      target_fps: el === A.x.STREAM && eo ? en : null,
      sender_user_id: null != (e_ = null == Q ? true : Q.ownerId) ? e_ : null,
      stream_region: null != (eh = null == J ? true : J.getRegion()) ? eh : null,
      stream_source_type: eo && null != (em = null == J || null == (eG = J.analyticsContext) ? true : eG.streamSourceType) ? em : null,
      num_stream_viewers: null != (eg = null == J || null == (eV = J.analyticsContext) ? true : eV.numViewers) ? eg : null,
      video_input_resolution_height: eo && null != et ? et : null,
      video_input_frame_rate: eo && null != en ? en : null,
      screenshare_capture_method: w(ed),
      share_application_name: null != er ? er : null,
      share_application_id: null != ei ? ei : null,
      share_application_executable: null != ea ? ea : null,
      share_application_distributor: null != es ? es : null,
      cpu_brand: null != (eE = null == t ? true : t.cpu_brand) ? eE : null,
      cpu_vendor: null != (ey = null == t ? true : t.cpu_vendor) ? ey : null,
      cpu_memory: null != (eb = null == t ? true : t.cpu_memory) ? eb : null,
      gpu_brand: null != (eO = null == t ? true : t.gpu_brand) ? eO : null,
      gpu_count: null != (ev = null == t ? true : t.gpu_count) ? ev : null,
      gpu_memory: null != (eA = null == t ? true : t.gpu_memory) ? eA : null,
      gpu_device_vendor_id: null != (eI = null == t ? true : t.gpu_device_vendor_id) ? eI : null,
      gpu_device_device_id: null != (eS = null == t ? true : t.gpu_device_device_id) ? eS : null,
      gpu_device_sub_sys_id: null != (eT = null == t ? true : t.gpu_device_sub_sys_id) ? eT : null,
      gpu_device_revision: null != (eC = null == t ? true : t.gpu_device_revision) ? eC : null,
      gpu_driver_version: null != (eN = null == t ? true : t.gpu_driver_version) ? eN : null,
      cpu_usage: null != (ew = b.A.getCurrentCPUUsagePercent()) ? ew : null,
      memory_usage: null != (eR = b.A.getCurrentMemoryUsageKB()) ? eR : null,
      outbound_bitrate_estimate: C(ed),
      inbound_bitrate_estimate: N(ed),
      hardware_enabled: f.A.getHardwareEncoding(),
      audio_input_device_name: null != z ? z : null == (eF = f.A.getInputDevices()[f.A.getInputDeviceId()]) ? true : eF.name,
      audio_output_device_name: null != q ? q : null == (eB = f.A.getOutputDevices()[f.A.getOutputDeviceId()]) ? true : eB.name,
      video_device_name: null != Z ? Z : null == (eH = f.A.getVideoDevices()[f.A.getVideoDeviceId()]) ? true : eH.name,
      audio_subsystem: f.A.getMediaEngine().getAudioSubsystem(),
      automatic_audio_subsystem: f.A.getSettings().automaticAudioSubsystem,
      audio_layer: f.A.getMediaEngine().getAudioLayer(),
      audio_input_mode: f.A.getSettings().mode,
      automatic_audio_input_sensitivity_enabled: f.A.getSettings().modeOptions.autoThreshold,
      audio_input_sensitivity: f.A.getSettings().modeOptions.threshold,
      echo_cancellation_enabled: f.A.getEchoCancellation(),
      noise_suppression_enabled: f.A.getNoiseSuppression(),
      noise_cancellation_enabled: f.A.getNoiseCancellation(),
      automatic_gain_control_enabled: f.A.getAutomaticGainControl(),
      sidechain_compression_enabled: f.A.getSidechainCompression(),
      input_volume: f.A.getInputVolume(),
      output_volume: f.A.getOutputVolume(),
      audio_input_device_count: Object.keys(f.A.getInputDevices()).length,
      audio_output_device_count: Object.keys(f.A.getOutputDevices()).length,
      app_hardware_acceleration_enabled: y.A.getAppHardwareAccelerationEnabled()
    };
    E.default.track(v.HAw.AV_ERROR_REPORTED, eY)
  })
}