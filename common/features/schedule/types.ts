import { Wei } from 'libs/units';
import { IHexStrTransaction } from 'libs/transaction';
import { TxObj } from 'ethereumjs-tx';

export interface ScheduleState {
  schedulingToggle: SetSchedulingToggleAction['payload'];
  timeBounty: SetTimeBountyFieldAction['payload'];
  windowSize: SetWindowSizeFieldAction['payload'];
  windowStart: SetWindowStartFieldAction['payload'];
  scheduleTimestamp: SetScheduleTimestampFieldAction['payload'];
  scheduleTimezone: SetScheduleTimezoneAction['payload'];
  scheduleType: SetScheduleTypeAction['payload'];
  scheduleGasLimit: SetScheduleGasLimitFieldAction['payload'];
  scheduleGasPrice: SetScheduleGasPriceFieldAction['payload'];
  scheduleDeposit: SetScheduleDepositFieldAction['payload'];
  scheduleParamsValidity: SetScheduleParamsValidityAction['payload'];
  scheduledTransactionHash: SetScheduledTransactionHashAction['payload'];
  scheduledTransactionAddress: SetScheduledTransactionAddressAction['payload'];
  scheduledTokensApproveTransaction: SetScheduledTokensApproveTransactionAction['payload'];
  sendingTokenApproveTransaction: SetSendingTokenApproveTransactionAction['payload'];
  scheduledTokenTransferSymbol: SetScheduledTokenTransferSymbolAction['payload'];
}

export enum ScheduleActions {
  CURRENT_TIME_BOUNTY_SET = 'SCHEDULE_CURRENT_TIME_BOUNTY_SET',
  CURRENT_WINDOW_SIZE_SET = 'SCHEDULE_CURRENT_WINDOW_SIZE_SET',
  CURRENT_WINDOW_START_SET = 'SCHEDULE_CURRENT_WINDOW_START_SET',
  CURRENT_SCHEDULE_TIMESTAMP_SET = 'SCHEDULE_CURRENT_SCHEDULE_TIMESTAMP_SET',
  CURRENT_SCHEDULE_TIMEZONE_SET = 'SCHEDULE_CURRENT_SCHEDULE_TIMEZONE_SET',
  CURRENT_SCHEDULE_TYPE = 'SCHEDULE_CURRENT_SCHEDULE_TYPE',
  TIME_BOUNTY_FIELD_SET = 'SCHEDULE_TIME_BOUNTY_FIELD_SET',
  WINDOW_SIZE_FIELD_SET = 'SCHEDULE_WINDOW_SIZE_FIELD_SET',
  WINDOW_START_FIELD_SET = 'SCHEDULE_WINDOW_START_FIELD_SET',
  GAS_PRICE_FIELD_SET = 'SCHEDULE_GAS_PRICE_SET',
  GAS_LIMIT_FIELD_SET = 'SCHEDULE_GAS_LIMIT_SET',
  TIMESTAMP_FIELD_SET = 'SCHEDULE_TIMESTAMP_FIELD_SET',
  TIMEZONE_SET = 'SCHEDULE_TIMEZONE_SET',
  TYPE_SET = 'SCHEDULE_TYPE_SET',
  TOGGLE_SET = 'SCHEDULING_TOGGLE_SET',
  DEPOSIT_FIELD_SET = 'SCHEDULE_DEPOSIT_FIELD_SET',
  PARAMS_VALIDITY_SET = 'SCHEDULE_PARAMS_VALIDITY_SET',
  ESTIMATE_SCHEDULING_GAS_REQUESTED = 'ESTIMATE_SCHEDULING_GAS_REQUESTED',
  ESTIMATE_SCHEDULING_GAS_SUCCEEDED = 'ESTIMATE_SCHEDULING_GAS_SUCCEEDED',
  ESTIMATE_SCHEDULING_GAS_FAILED = 'ESTIMATE_SCHEDULING_GAS_FAILED',
  ESTIMATE_SCHEDULING_GAS_TIMEDOUT = 'ESTIMATE_SCHEDULING_GAS_TIMEDOUT',
  SCHEDULED_TRANSACTION_HASH_SET = 'SCHEDULED_TRANSACTION_HASH_SET',
  SCHEDULED_TRANSACTION_ADDRESS_SET = 'SCHEDULED_TRANSACTION_ADDRESS_SET',
  SCHEDULED_TOKENS_APPROVE_TRANSACTION_SET = 'SCHEDULED_TOKENS_APPROVE_TRANSACTION_SET',
  SCHEDULED_TOKEN_TRANSFER_SYMBOL_SET = 'SCHEDULED_TOKEN_TRANSFER_SYMBOL_SET',
  SENDING_TOKEN_APPROVE_TRANSACTION_SET = 'SENDING_TOKEN_APPROVE_TRANSACTION_SET'
}

//#region Fields
export interface SetTimeBountyFieldAction {
  type: ScheduleActions.TIME_BOUNTY_FIELD_SET;
  payload: {
    raw: string;
    value: Wei | null;
  };
}

export interface SetWindowSizeFieldAction {
  type: ScheduleActions.WINDOW_SIZE_FIELD_SET;
  payload: {
    raw: string;
    value: Wei | null;
  };
}

export interface SetWindowStartFieldAction {
  type: ScheduleActions.WINDOW_START_FIELD_SET;
  payload: {
    raw: string;
    value: number | null;
  };
}

export interface SetScheduleTimestampFieldAction {
  type: ScheduleActions.TIMESTAMP_FIELD_SET;
  payload: {
    raw: string;
    value: Date;
  };
}

export interface SetScheduleTypeAction {
  type: ScheduleActions.TYPE_SET;
  payload: {
    raw: string;
    value: string | null;
  };
}

export interface SetSchedulingToggleAction {
  type: ScheduleActions.TOGGLE_SET;
  payload: {
    value: boolean;
  };
}

export interface SetScheduleTimezoneAction {
  type: ScheduleActions.TIMEZONE_SET;
  payload: {
    raw: string;
    value: string;
  };
}

export interface SetScheduleGasPriceFieldAction {
  type: ScheduleActions.GAS_PRICE_FIELD_SET;
  payload: {
    raw: string;
    value: Wei | null;
  };
}

export interface SetScheduleGasLimitFieldAction {
  type: ScheduleActions.GAS_LIMIT_FIELD_SET;
  payload: {
    raw: string;
    value: Wei | null;
  };
}

export interface SetScheduleDepositFieldAction {
  type: ScheduleActions.DEPOSIT_FIELD_SET;
  payload: {
    raw: string;
    value: Wei | null;
  };
}

export interface SetScheduleParamsValidityAction {
  type: ScheduleActions.PARAMS_VALIDITY_SET;
  payload: {
    value: boolean;
  };
}

export type ScheduleFieldAction =
  | SetTimeBountyFieldAction
  | SetWindowSizeFieldAction
  | SetWindowStartFieldAction
  | SetScheduleTimestampFieldAction
  | SetScheduleTypeAction
  | SetSchedulingToggleAction
  | SetScheduleGasPriceFieldAction
  | SetScheduleGasLimitFieldAction
  | SetScheduleDepositFieldAction
  | SetScheduleTimezoneAction
  | SetScheduleParamsValidityAction
  | SetScheduledTransactionHashAction
  | SetScheduledTransactionAddressAction
  | SetScheduledTokensApproveTransactionAction
  | SetScheduledTokenTransferSymbolAction
  | SetSendingTokenApproveTransactionAction;
//#endregion Fields

//#region Schedule Timestamp
export interface SetCurrentScheduleTimestampAction {
  type: ScheduleActions.CURRENT_SCHEDULE_TIMESTAMP_SET;
  payload: string;
}

export type ScheduleTimestampCurrentAction = SetCurrentScheduleTimestampAction;

export interface SetCurrentScheduleTimezoneAction {
  type: ScheduleActions.CURRENT_SCHEDULE_TIMEZONE_SET;
  payload: string;
}
//#endregion Schedule Timestamp

//#region Schedule Type
export interface SetCurrentScheduleTypeAction {
  type: ScheduleActions.CURRENT_SCHEDULE_TYPE;
  payload: string;
}

export type ScheduleTypeCurrentAction = SetCurrentScheduleTypeAction;
//#endregion Schedule Type

//#region Time Bounty
export interface SetCurrentTimeBountyAction {
  type: ScheduleActions.CURRENT_TIME_BOUNTY_SET;
  payload: string;
}

export type TimeBountyCurrentAction = SetCurrentTimeBountyAction;
//#endregion Time Bounty

//#region Window Size
export interface SetCurrentWindowSizeAction {
  type: ScheduleActions.CURRENT_WINDOW_SIZE_SET;
  payload: string;
}

export type WindowSizeCurrentAction = SetCurrentWindowSizeAction;
//#endregion Window Size

//#region Window Size
export interface SetCurrentWindowStartAction {
  type: ScheduleActions.CURRENT_WINDOW_START_SET;
  payload: string;
}

export type WindowStartCurrentAction = SetCurrentWindowStartAction;
//#endregion Window Size

//#region Estimate Scheduling Gas
export interface EstimateSchedulingGasRequestedAction {
  type: ScheduleActions.ESTIMATE_SCHEDULING_GAS_REQUESTED;
  payload: Partial<IHexStrTransaction>;
}

export interface EstimateSchedulingGasSucceededAction {
  type: ScheduleActions.ESTIMATE_SCHEDULING_GAS_SUCCEEDED;
}

export interface EstimateSchedulingGasFailedAction {
  type: ScheduleActions.ESTIMATE_SCHEDULING_GAS_FAILED;
}

export interface EstimateSchedulingGasTimeoutAction {
  type: ScheduleActions.ESTIMATE_SCHEDULING_GAS_TIMEDOUT;
}
//#endregion Estimate Scheduling Gas

//#region Scheduled Transaction Hash
export interface SetScheduledTransactionHashAction {
  type: ScheduleActions.SCHEDULED_TRANSACTION_HASH_SET;
  payload: {
    raw: string;
    value: string;
  };
}
//#endregion

//#region Scheduled Transaction Address
export interface SetScheduledTransactionAddressAction {
  type: ScheduleActions.SCHEDULED_TRANSACTION_ADDRESS_SET;
  payload: {
    raw: string;
    value: string;
  };
}
//#endregion

//#region Scheduled Token Transaction Symbol
export interface SetScheduledTokenTransferSymbolAction {
  type: ScheduleActions.SCHEDULED_TOKEN_TRANSFER_SYMBOL_SET;
  payload: {
    raw: string;
    value: string;
  };
}
//#endregion

//#region Scheduled Tokens Approve Transaction
export interface SetScheduledTokensApproveTransactionAction {
  type: ScheduleActions.SCHEDULED_TOKENS_APPROVE_TRANSACTION_SET;
  payload: TxObj | undefined;
}
//#endregion

//#region Sending Token Approve Transaction
export interface SetSendingTokenApproveTransactionAction {
  type: ScheduleActions.SENDING_TOKEN_APPROVE_TRANSACTION_SET;
  payload: boolean;
}
//#endregion

export type ScheduleAction = ScheduleFieldAction;
