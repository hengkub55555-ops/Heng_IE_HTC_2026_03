export interface ModelItem {
  id: string;
  name: string;
  cycles: number; // รอบกระเช้าต่อชั่วโมง (รอบ/ชม.)
  pcsPerCycle: number; // ชิ้นงานต่อรอบกระเช้า
  notes?: string;
}

export interface ShiftSettings {
  shiftHours: number;
  deliveryInterval: number; // นาที/รอบ
  defaultPcsCycle: number;
  targetUph: number;
  shiftStartTime: string; // e.g. "08:00"
  foamJigCycleTimeSec: number; // เวลาฉีดโฟมต่อตู้ (วินาที)
  bufferTargetMinutes: number; // สต็อกสำรองหน้าไลน์ (นาที)
}

export interface HourlyLog {
  [hourIndex: number]: {
    [modelId: string]: {
      deliveredCycles: number;
      isDelivered: boolean;
      notes?: string;
    };
  };
}
