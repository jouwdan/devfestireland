export type Schedule = Array<{
  date: string;
  isDefault: boolean;
  rooms: Array<{
    id: number;
    name: string;
    sessions: Array<{
      id: string;
      title: string;
      description?: string;
      startsAt: string;
      endsAt: string;
      isServiceSession: boolean;
      isPlenumSession: boolean;
      speakers: Array<{
        id: string;
        name: string;
      }>;
      categories: Array<any>;
      roomId: number;
      room: string;
      liveUrl: any;
      recordingUrl: any;
      status?: string;
      isInformed: boolean;
      isConfirmed: boolean;
    }>;
    hasOnlyPlenumSessions: boolean;
  }>;
  timeSlots: Array<{
    slotStart: string;
    rooms: Array<{
      id: number;
      name: string;
      session: {
        id: string;
        title: string;
        description?: string;
        startsAt: string;
        endsAt: string;
        isServiceSession: boolean;
        isPlenumSession: boolean;
        speakers: Array<{
          id: string;
          name: string;
        }>;
        categories: Array<any>;
        roomId: number;
        room: string;
        liveUrl: any;
        recordingUrl: any;
        status?: string;
        isInformed: boolean;
        isConfirmed: boolean;
      };
      index: number;
    }>;
  }>;
}>;
