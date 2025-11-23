package com.rolo.ROLO.controller;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class ResultMapper {

	public static <T> List<T> mapToList(List<Map<String, Object>> rows, Class<T> clazz) throws Exception {
		List<T> result = new ArrayList<>(rows.size());

		for (Map<String, Object> row : rows) {
			T instance = clazz.getDeclaredConstructor().newInstance();

			for (Map.Entry<String, Object> entry : row.entrySet()) {
				String column = entry.getKey();
				Object value = entry.getValue();

				Field field = findField(clazz, column);
				if (field != null) {
					field.setAccessible(true);
					field.set(instance, value);
				}
			}
			result.add(instance);
		}
		return result;
	}

	private static Field findField(Class<?> clazz, String column) {
		String normalized = column.replaceAll("_", "").toLowerCase();
		for (Field f : clazz.getDeclaredFields()) {
			String fName = f.getName().replaceAll("_", "").toLowerCase();
			if (fName.equals(normalized)) {
				return f;
			}
		}
		return null;
	}

}
