/// <reference path="../../typings/node.d.ts" />
"use strict";

// Error Codes: 1000- 1999
enum TacoErrorCode {
    CordovaCmdNotFound = 1001,
    CordovaCommandFailed,
    CordovaCommandFailedWithError,
    CommandBuildInvalidPlatformLocation,
    CommandBuildTacoSettingsNotFound,
    CommandNotBothDeviceEmulate,
    CommandNotBothDebugRelease,
    CommandNotBothLocalRemote,
    CommandRemotePlatformNotKnown,
    CommandKitNotBothJsonAndCli,
    CommandCreateInvalidPath,
    CommandCreateNoPath,
    CommandCreateNotBothCliAndKit,
    CommandCreateNotBothTemplateAndCli,
    CommandCreateNotTemplateIfCustomWww,
    CommandCreateOnlyLocalCustomWww,
    CommandCreatePathNotEmpty,
    CommandCreateTacoJsonFileCreationError,
    CommandCreateTacoJsonFileWriteError,
    CommandCreateTemplatesUnavailable,
    CommandInstallCordovaTooOld,
    CommandSetupCantFindRemoteMount,
    CommandSetupConnectionRefused,
    CommandSetupNotfound,
    CommandSetupRemoteInvalidPin,
    CommandSetupRemoteInvalidPort,
    CommandSetupRemoteRejectedPin,
    CommandSetupTimedout,
    ErrorDownloadingRemoteBuild,
    ErrorHttpGet,
    ErrorUploadingRemoteBuild,
    ErrorDuringRemoteBuildSubmission,
    ErrorCertificateLoad,
    ErrorCertificatePathChmod,
    ErrorCertificateSave,
    ErrorCertificateSaveToPath,
    ErrorCertificateSaveWithErrorCode,
    ErrorTacoJsonMissingOrMalformed,
    ErrorPatchCreation,
    ErrorNoPlatformsFound,
    GetCertificateFailed,
    HttpGetFailed,
    InvalidBuildSubmission400,
    InvalidRemoteBuild,
    InvalidRemoteBuildClientCert,
    InvalidRemoteBuildUrl,
    NoCertificateFound,
    NoRemoteBuildIdFound,
    RemoteBuildError,
    RemoteBuildHostNotFound,
    RemoteBuildNoConnection,
    RemoteBuildNonSslConnectionReset,
    RemoteBuildSslConnectionReset,
    RemoteBuildStatusPollFailed,
    RemoteBuildUnsuccessful,
    UnsupportedPlatform,
}

export = TacoErrorCode;
