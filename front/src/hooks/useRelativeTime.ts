import { useMemo } from "react";

export function useRelativeDate(inputDate: Date | number){
  const date = useMemo(() => {
    if (!inputDate) return null;
    return inputDate instanceof Date ? inputDate : new Date(inputDate);
  }, [inputDate]);

  const formatted = useMemo(() => {
    if (!date || Number.isNaN(date.getTime())) return "";

    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffHours < 24) {
      return `${diffHours} ${diffHours === 1 ? "hora" : "horas"}`;
    } else if (diffDays === 1) {
      return "ontem";
    } else {
      return `${diffDays} ${diffDays === 1 ? "dia" : "dias"}`;
    }
  }, [date]);

  return formatted;
}
