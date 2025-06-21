<template>
  <div id="main-page">
    <!----- Contenido principal ----->
    <main class="flex flex-col gap-6 px-10 py-8">
      <!------ Plaza de Servicio ----->
      <card>
        <template #title>
          <div class="flex w-full justify-between items-center">
            <span class="text-center">
              Plaza de Servicio
            </span>
          </div>
        </template>
        <template #content>
          <!-- Información de la Plaza -->
          <section class="flex flex-col gap-4">
            <!-- Tarjeta de Información -->
            <div
              class="card bg-base-300 shadow-md w-full p-4"
            >
              <div class="card-body flex flex-col md:flex-row justify-between items-start md:items-center">
                <!-- Detalles principales -->
                <div class="flex-1">
                  <p><strong>No:</strong> 789/2024A</p>
                  <p><strong>Estatus:</strong> FINALIZADO</p>
                  <p><strong>Dependencia:</strong> Unidad Administrativa</p>
                  <p><strong>Programa:</strong> Apoyo Administrativo</p>
                </div>

                <!-- Detalles adicionales -->
                <div class="flex-1">
                  <p><strong>Fecha de Inicio:</strong> 04/03/2024</p>
                  <p><strong>Fecha de Finalización:</strong> 06/09/2024</p>
                  <p><strong>Tiempo Reportado:</strong> 480 horas</p>
                </div>
              </div>
            </div>
          </section>
        </template>
      </card>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
    }
  },
  methods: {
    logout() {
      this.$router.push({ name: 'SignIn' })
    }
  }
}
</script>

<style scoped>
/* Estilos generales */
#main-page {
  font-family: Arial, sans-serif;
}

.card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

button[type="submit"] {
  transition: background-color 0.3s ease;
}
</style>